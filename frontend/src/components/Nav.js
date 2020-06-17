
import { Link, NavLink } from "react-router-dom"
import styled from 'styled-components'
import img from '../lib/images/default.png'
import { useDispatch, useSelector } from 'react-redux';
import { user, logout, getProfileMessage } from '../reducers/user';

import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export const Navigate = () => {
    const dispatch = useDispatch();
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <NavContainer>
            <Link to to="/"><LogoLink></LogoLink>
            </Link>

            <ul>
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
            </ul >
        </NavContainer>
    )
}

/* export const NavDropdownExample = () => {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    const dispatch = useDispatch();

    return (
        <>
            <style type="text/css"> {`
    .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
      background-color: purple;
      color: white;
    }
    `}
            </style>

            <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
                <NavDropdown title="Menu" id="nav-dropdown">

                    <NavDropdown.Item> <NavLink className="nav-link" to="/">Home</NavLink></NavDropdown.Item>
                    <NavDropdown.Item ><NavLink className="nav-link" to="/About">About</NavLink></NavDropdown.Item>
                    <NavDropdown.Item > <NavLink className="nav-link" to="/sessions">LogIn/Register</NavLink></NavDropdown.Item>
                    <NavDropdown.Item> <NavLink className="nav-link" to="/"><input
                        type="submit"
                        onClick={(e) => dispatch(logout())}
                        value="Test Logout"
                    /></NavLink> </NavDropdown.Item>

                </NavDropdown>
            </Nav>
        </>
    );
} */
export const NavContainer = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
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


/* .nav-pills .nav-link.active, .nav-pills .show > .nav-link {

    background-color: green;
}
const Nav = styled(InlineStyledComponent)`
  &[style] {
    font-size: 12px !important;
    color: blue !important;
  }
` */