import React from "react"
import { useSelector } from 'react-redux'
import { PlantCard } from "../components/PlantCard"
import { plant } from "reducers/plantReducer"
import { PlantList } from "components/PlantList"
import styled from 'styled-components/macro'

const Container = styled.main`
padding: 20px;
h1{
    text-align: center;
}
h2{
    font-size:1rem;
    @media (min-width: 650px) {
width: 40%;
margin: 0 auto;
}}
`;

export const Plants = () => {
    return (
        <>
            <Container>
                <h1> Plants for sale</h1>
                <h2>Find your favoutite and send an email to the person with green fingers to make a deal and give the plant a new home.</h2>
            </Container>
            <PlantList />
        </>
    )
}
