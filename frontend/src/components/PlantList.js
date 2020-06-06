import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { PlantCard } from "./PlantCard"

export const PlantList = () => {
    const plants = useSelector((state) => state.plant.plants)

    return (
        <ul>
            {plants.map((item) => (
                <PlantCard key={item.id} item={item} />
            ))}
        </ul>
    )
}