import React from "react"
import { useSelector } from 'react-redux'
import { PlantCard } from "../components/PlantCard"
import { plant } from "reducers/plantReducer"
import { PlantList } from "components/PlantList"
import styled from 'styled-components/macro'

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

const Container = styled.main`
padding: 10px;
h1{
    text-align: center;
}
h2{
    font-size:1rem;
}
`