import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlantCard } from "./PlantCard"
import { plant, fetchPlants } from "reducers/plantReducer"
import styled from "styled-components/macro";

const API_PLANTS = 'https://home-grown-green.herokuapp.com/plants'

const ListSection = styled.div`
width: 100%;
ul{
list-style: none;
align-items:center;
margin: 0 auto;
display: flex;
flex-direction: row;
align-self: center;
flex-wrap: wrap;
padding-inline-start: 0;
justify-content: center;
}
`

export const PlantList = () => {
    const dispatch = useDispatch()
    const allPlants = useSelector((store) => (store.plant.plants))

    // store plants in reux
    useEffect(() => {
        dispatch(fetchPlants())
    }, [dispatch])

    if (!allPlants) {
        return <>Paitence, still loading.. </>
    }
    console.log(allPlants.length)
    return (

        <ListSection>

            <ul>
                {allPlants.map((plant) => (
                    <PlantCard key={plant._id} plant={plant} />
                ))}
            </ul>
        </ListSection>
    )
}
