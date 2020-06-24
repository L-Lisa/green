/* import React from "react"
import styled from 'styled-components'
import img from '../lib/images/gardener.jpg'

import { Link, NavLink } from "react-router-dom"

export const Descision = () => {
    return (
        <DescisionContainer>
            <h1>Welcome back, are you buying or selling plants today?</h1>
            <Link to to="/plants"><Button></Button></Link>
            <Link to to="/profile"><Button></Button></Link>
        </DescisionContainer>
    )
}


export const DescisionContainer = styled.section`
background-image: url(${img});
    width: 100%;
    height: 100vh;
    font-family: Merriweather;
    color: whitesmoke;
    background-position:50% 50%;
    padding: 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
    width: max-content;
    color: black;
    background-color: #fff;
    border-radius: 5px;
    background-color: rgba(217, 247, 219, 0.2);
    }
   `

export const LogoLink = styled.div`
width: 90px;
height: 60px;
background-image: url(${img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`; */