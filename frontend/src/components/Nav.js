import React from "react"
import { Link, NavLink } from "react-router-dom"
import styled from 'styled-components'

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li className="list-items">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="list-items">
                    <NavLink className="nav-link" to="/About">About</NavLink>
                </li>
                <li className="list-items">
                    <NavLink className="nav-link" to="/sessions">LogIn</NavLink>
                </li>
                <li className="list-items">
                    <NavLink className="nav-link" to="/Plants">Get greens</NavLink>
                </li>
            </ul>
        </nav>
    )
}

/* export const NavButton = styled.button`
  padding: 3px;
  margin: 6px;
  background: wheat;
  color: green;
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 6px;

  &:hover {
    background: green;
    color: wheat;
  }
` */