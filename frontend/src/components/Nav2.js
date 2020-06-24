import { Link, NavLink } from "react-router-dom"
import styled from 'styled-components/macro'
import img from '../lib/images/default.png'
import { useDispatch, useSelector } from 'react-redux'
import { user, logout, getProfileMessage } from '../reducers/user'
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export const NavContainer2 = styled.div`
margin:0;
padding:0;
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
background-color: #9ec2a2;
color:white;
@media (min-width: 600px) {
display: none; 
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
  border-radius: 6px;
  align-self: flex-end;
  border: none;
  input{
    background: wheat;
  }
  &:hover {
    background: #9ec2a2;
    color: wheat;
  }
  nav-link{
    color: black;
  background-color: #9ec2a2;
  &:hover {
    background: #9ec2a2;
    color: wheat;
  }}
`;
export const LogoLink = styled.div`
width: 90px;
height: 60px;
background-image: url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

export const Navigate2 = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`)
  const dispatch = useDispatch();
  return (
    <NavContainer2>
      <Link to to="/"><LogoLink></LogoLink>
      </Link>
      <style type="text/css"> {`
            .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
                background-color: #9ec2a2;
                color: white;
            }
            `}
      </style>
      <Nav variant="pills" onSelect={handleSelect}>
        <NavDropdown className="p-2" title="Menu" id="nav-dropdown">

          <NavDropdown.Item className="list-items"> <NavLink className="nav-link " to="/">Home</NavLink></NavDropdown.Item>

          <NavDropdown.Item className="list-items"><NavLink className="nav-link" to="/About">About</NavLink></NavDropdown.Item>

          <NavDropdown.Item className="list-items"> <NavLink className="nav-link" to="/sessions">LogIn/Register</NavLink></NavDropdown.Item>

          <NavDropdown.Item className="list-items"> <NavLink className="nav-link" to="/Plants">Buy Plants</NavLink></NavDropdown.Item>

          <NavDropdown.Item className="list-items"> <NavLink className="nav-link" to="/Profile">Your Page</NavLink></NavDropdown.Item>

          <NavDropdown.Item className="list-items"> <NavLink className="nav-link list-items" to="/"><input
            className=" bg-transparent border-0 list-items color-white"
            type="submit"
            onClick={(e) => dispatch(logout())}
            value="Logout"
          /></NavLink> </NavDropdown.Item>

        </NavDropdown>
      </Nav>
    </NavContainer2>
  );
}


