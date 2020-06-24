import React from "react"
import { useSelector } from 'react-redux'
import img from '..//lib/images/peaches.jpg'
import { PlantCard } from "../components/PlantCard"
import { plant } from "reducers/plantReducer"
import styled from 'styled-components'
import { PlantList } from "components/PlantList"

const Hero = styled.section`
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
   `;

export const HomePage = () => {
    return (
        <>
            <Hero>
                <h1>Home grown plants - sell and buy them here!</h1>
            </Hero>
            <section>
                <PlantList />
            </section>
        </>
    )
}

