import React from "react"
import styled from 'styled-components';
import img from '..//lib/images/greenhouse.jpg';


export const HomePage = () => {
    return (
        <Hero>
            <h1>is the home page, with NAV links, hero image, PlantsCard grid with plants for sale and footer, CTA: sell your produce here!</h1>
        </Hero >
    )
}


const Hero = styled.section`
    background-image: url(${img});
    width: 100%;
    height: 100vh;
    font-family: Merriweather;
    color: whitesmoke;
    background-position:50% 50%;
    padding: 20px;
    margin:-1rem -1rem 0 -1rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    h1{
        text-align: center;
        text-justify: center;
        color: black;
    }
   `