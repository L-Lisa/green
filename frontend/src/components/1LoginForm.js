// New login, return does not renter???
import React, { useState } from 'react';
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import { user, login } from '../reducers/user';
import styled from 'styled-components';
import { Form } from "../lib/Form"


const SIGNUP_URL = 'http://localhost:8080/users';
const LOGIN_URL = 'http://localhost:8080/sessions';

export const LoginForm = () => {
    const handleFormSubmit = (event) => {
        const [formSubmitType, setFormSubmitType] = useState('');
        event.preventDefault();
        console.log('Form submit type: ' + formSubmitType);

        if (formSubmitType === 'login') {
            const handleLogin = (event) => {
                event.preventDefault();
                dispatch(login(name, password));
            };

        } else if (formSubmitType === 'register') {
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
                    })
            }
        }
        return (
            <div>
                <Form>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={mail}
                            onChange={(event) => setMail(event.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <button type="submit" onClick={(e) => setFormSubmitType('login')}>
                            Login
        </button>
                        <button type="submit" onClick={(e) => setFormSubmitType('register')}>
                            Register
        </button>
                    </form>
                </Form >
            </div >
        )
    }
}