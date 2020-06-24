import React, { useState } from 'react'
import { Profile } from '../pages/Profile'
import { useDispatch, useSelector } from 'react-redux'
import { user, login } from '../reducers/user'
import styled from 'styled-components'
import { Form, Button } from "../lib/Form"
import { Link, NavLink } from "react-router-dom"
const SIGNUP_URL = 'https://home-grown-green.herokuapp.com/users'
const LOGIN_URL = 'https://home-grown-green.herokuapp.com/sessions'

export const LoginForm = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState("")

  // To sign up new user
  const handleSignup = (event) => {
    event.preventDefault();

    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (!res.ok) {
          throw 'Could not create account.  Try a different username.';
        }
        return res.json();
      })
      .then((json) => {
        // Save the login info
        dispatch(
          user.actions.setAccessToken({
            accessToken: json.accessToken,
          })
        );
        dispatch(user.actions.setUserId({ userId: json.userId }))
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }))
      });
  };
  // To sign in a user.
  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(name, email, password));
  };
  if (!accessToken) {
    return (
      <div>
        <Form>
          <h1>Welcome, sign in or register here. </h1>
          <label>
            Name
              <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label><br />
          <label>
            Email
              <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label><br />
          <label>
            Password
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label><br />
          <span type="submit" onClick={handleLogin}>
            Login
          </span>
          <span type="submit" onClick={handleSignup}>
            Register a new user
          </span>
        </Form>
      </div>
    )
  } else {
    return <Profile />
  }
}