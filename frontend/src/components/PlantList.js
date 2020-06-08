import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { PlantCard } from "./PlantCard"
const API_PLANTS = 'http://localhost:8080/plants'

export const PlantList = () => {
    const plants = useSelector((state) => state.plant.plants)// Cloudinary??!?!
    // dispatch?
    /* 
        fetch(API_PLANTS, { method: 'GET', body: formData })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
            }) */
    return (
        <ul>
            {plants.map((item) => (
                <PlantCard key={item.id} item={item} />
            ))}
        </ul>
    )
}