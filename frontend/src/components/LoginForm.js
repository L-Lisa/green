import React, { useState } from 'react'
import Profile from '../pages/Profile'
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

  // To sign up a user.
  const handleSignup = (event) => {
    /*     const [name, setName] = useState("");
        const [password, setPassword] = useState(""); */
    event.preventDefault();

    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),/// att to formdata
      headers: { 'Content-Type': 'application/json' },/// att to formdata
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
    // If user is logged out, show login form
    return (
      <div>
        {/*  <Profile /> */}
        <Form>

          <h1>Welcome, sign or register in here. </h1>
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
          <Button type="submit" onClick={handleLogin}>
            Login
          </Button>
          OR
          <Button type="submit" onClick={handleSignup}>
            Register a new user
          </Button>

        </Form>
      </div>
    );
  } else {
    // If user is logged in, show profile
    return <Profile />
  }
};
export default LoginForm;
