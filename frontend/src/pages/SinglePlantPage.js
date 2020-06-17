import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { plant } from "../reducers/plantReducer"


/* export const SinglePlantPage = () => {
    return (
        <PlantCardInput url={plant.imageUrl} key={plant.id}>
            {title && <h1>{title}</h1>}
            <img src={`${imageUrl}`} alt={title} />
            {description && <h2>{description}</h2>}
        </PlantCardInput>
    )
}
 */

export const SinglePlantPage = () => {
    const { id } = useParams();
    const [details, setDetails] = useState();
    const singleUrl = `https://home-grown-green.herokuapp.com/plants/${id}`

    useEffect(() => {
        fetch(singleUrl)
            .then(res => res.json())
            .then(json => setDetails(json))
    }, [singleUrl, id])
    console.log(details)
    return (
        <div>
            <h1> {details?.title}</h1>
            <img src={details?.imageUrl} key={details?._id} />
            <h2>{details?.description}</h2>
        </div>
    )
} 