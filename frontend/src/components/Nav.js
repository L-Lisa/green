import React from "react"
import { Link, NavLink } from "react-router-dom"
import styled from 'styled-components'
import img from '../lib/images/default.png'

export const Nav = () => {
    return (
        <NavBar>
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
            </ul>
        </NavBar>
    )
}
export const NavBar = styled.div`
width: 100%;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;


`
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
` 