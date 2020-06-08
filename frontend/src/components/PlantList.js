import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PlantCard } from "./PlantCard"
import { plant } from "reducers/plantReducer"
const API_PLANTS = 'http://localhost:8080/plants'


export const PlantList = () => {
    const allPlants = useSelector((store) => (store.plant.plants))

    return (
        <ul>
            {allPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
            ))}
        </ul>
    )
}