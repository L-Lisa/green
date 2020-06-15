import React from "react"
import { useSelector } from 'react-redux'
import { PlantCard } from "../components/PlantCard"
import { plant } from "reducers/plantReducer"
import { PlantList } from "components/PlantList"

export const Plants = () => {

    return (
        <PlantList />

    )
}