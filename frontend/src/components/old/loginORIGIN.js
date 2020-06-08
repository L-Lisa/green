import React, { useState } from 'react';
import Profile from '../../pages/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { user, login } from '../../reducers/user';
import styled from 'styled-components';
import { Form, Button } from "../../lib/Form"
import { Link, NavLink } from "react-router-dom"


const SIGNUP_URL = 'http://localhost:8080/users';
const LOGIN_URL = 'http://localhost:8080/sessions';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // To sign up a user.
  const handleSignup = (event) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    event.preventDefault();

    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
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
        dispatch(user.actions.setUserId({ userId: json.userId }));
      })
      .catch((err) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: err }));
      });
  };

  // To sign in a user.
  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(login(name, password));
  };

  if (!accessToken) {
    // If user is logged out, show login form
    return (
      <div>
        {/*  <Profile /> */}
        <Form>

          <h1>Sign in or Sign up as new user</h1>
          <label>
            Name
                <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label><br />
          <label>
            Password
            <input
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label><br />
          <Button type="submit" onClick={handleSignup}>
            Sign-Up
          </Button>
          OR
          <Button type="submit" onClick={handleLogin}>
            Login
          </Button>

        </Form>
      </div>
    );
  } else {
    // If user is logged in, show profile
    return <Profile />;
  }
};
export default LoginForm;
