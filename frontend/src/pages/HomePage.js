import React from "react"
import { useSelector } from 'react-redux'
import img from '..//lib/images/saplings.jpg'
import { PlantCard } from "../components/PlantCard"
import { plant } from "reducers/plantReducer"
import styled from 'styled-components'
import { PlantList } from "components/PlantList"


export const HomePage = () => {
    const allPlants = useSelector((store) => (store.plant.plants))
    return (
        <>
            <Hero>
                <h1>Home grown plants - sell and buy them here!</h1>
            </Hero>
            <section>
                <ul>
                    {allPlants.map((plant) => (
                        <PlantList key={plant.id} plant={plant} />
                    ))}
                </ul>
            </section>
        </>
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
