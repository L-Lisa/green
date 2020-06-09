import React from "react"
import { useSelector } from 'react-redux'
import { PlantCard } from "../components/PlantCard"
import { plant } from "reducers/plantReducer"

export const Plants = () => {
    const allPlants = useSelector((store) => (store.plant.plants))
    return (
        <div>
            <h1>This is the Plants"PRODUCT PAGE" with NAV and footer</h1>
            <section>

                <ul>
                    {allPlants.map((plant) => (
                        <PlantCard key={plant.id} plant={plant} />
                    ))}
                </ul>
)}
</section>
        </div>
    )
}