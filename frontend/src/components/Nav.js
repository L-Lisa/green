import React from "react"
import { Link, NavLink } from "react-router-dom"
import styled from 'styled-components'

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li className="list-items">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="list-items">
                    <NavLink className="nav-link" to="/About">About</NavLink>
                </li>
                <li className="list-items">
                    <NavLink className="nav-link" to="/sessions">LogIn</NavLink>
                </li>
                <li className="list-items">
                    <Link className="nav-link" to="/Plants">Get greens</Link>
                </li>
            </ul>
        </nav>
    )
}

