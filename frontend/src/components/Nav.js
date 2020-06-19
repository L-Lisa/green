
import { Link, NavLink } from "react-router-dom"
import styled from 'styled-components'
import img from '../lib/images/default.png'
import { useDispatch, useSelector } from 'react-redux';
import { user, logout, getProfileMessage } from '../reducers/user';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export const Navigate = () => {
    const dispatch = useDispatch();
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <NavContainer ClassName="visuallyhidden">
            <Link to to="/"><LogoLink></LogoLink>
            </Link>

            <Ul>
                <li className="list-items">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="list-items">
                    <NavLink className="nav-link" to="/About">About</NavLink>
                </li>
                <li className="list-items">
                    <NavLink className="nav-link" to="/sessions">LogIn/Register</NavLink>
                </li>
                <li className="list-items">
                    <NavLink className="nav-link" to="/Plants">Plants for sale</NavLink>
                </li>
                <li className="list-items">
                    <NavLink className="nav-link" to="/"><input
                        type="submit"
                        onClick={(e) => dispatch(logout())}
                        value="Logout"
                    /></NavLink>
                </li>
            </Ul >
        </NavContainer>
    )
}



export const Ul = styled.ul`
list-style: none;
display: inline-flex;
padding: 3px;
border-radius: 2px;
margin: 5px;
text-transform: uppercase;
font-size: 1rem;
letter-spacing: 1.5px;
color: #fff;
`
export const NavContainer = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
background-color: #9ec2a2;
color:white;
@media (max-width: 670px) {
position: absolute; 
overflow: hidden; 
clip: rect(0 0 0 0); 
height: 1px; width: 1px; 
margin: -1px; padding: 0; border: 0; 
}
`;

export const NavBar = styled.div`
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
`;
export const NavButton = styled.button`
padding: 3px;
margin: 0 6px;
background: wheat;
color: green;
font-size: 1rem;
border: 1px solid black;
border-radius: 6px;
align-self: flex-end;

  &:hover {
    background: green;
    color: wheat;
  }
`
export const LogoLink = styled.div`
width: 60px;
height: 60px;
background-image: url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

