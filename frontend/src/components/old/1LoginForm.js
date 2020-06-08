// New login, return does not renter??? https://gist.github.com/puj/03425c7767e05c05475f1b02ce9bae78
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
    const accessToken = useSelector((store) => store.user.login.accessToken);
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [formSubmitType, setFormSubmitType] = useState('');


    const handleFormSubmit = (event) => {

        console.log('Form submit type: ' + formSubmitType);

        if (formSubmitType === 'login') {
            const dispatch = useDispatch();
            event.preventDefault();
            dispatch(login(name, password));

        } else if (formSubmitType === 'register') {
            const dispatch = useDispatch();
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
        }
    };
    if (!accessToken) {
        return (
            <div>
                <Form onSubmit={handleFormSubmit}>
                    <h1>Sign in or Sign up as new user</h1>
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    {/*  <input
          type="email"
          placeholder="Email"
          required
          value={mail}
          onChange={(event) => setMail(event.target.value)}
        /> */}
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button type="submit" onClick={(e) => setFormSubmitType('login')}>
                        Login
        </Button>
                    <Button type="submit" onClick={(e) => setFormSubmitType('register')}>
                        Register
        </Button>
                </Form>
            </div>
        );
    } else {
        // If user is logged in, show profile
        return <Profile />;
    }
}