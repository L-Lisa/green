import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { plant } from "../reducers/plantReducer"
import styled from "styled-components/macro"

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
        <DetailsContainer>
            <img src={details?.imageUrl} key={details?._id} />
            <div>
                <h1> {details?.title}</h1>
                <h2>{details?.description}</h2>
                <a href={`mailto:${details?.email}`}><i class="fas fa-envelope fa-2x"></i></a>
            </div>
        </DetailsContainer>
    )
}

const DetailsContainer = styled.section`
display: flex;
flex-direction: row;
width: fit-content;
height: 400px;
border: solid 1px rgba(0, 0, 0, 0.2);
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
margin: 20px;
border-radius: 3px;
background: white;
background-color: #9ec2a285;
@media (max-width: 550px) {
flex-direction:column;
height: fit-content;
img{
    margin:0;
}
}
img{
    width: auto;
    height: unset;
    margin: 5px 0;
    object-fit: contain;
}
h1 {
    text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  color: black; 
}
h2 {
    font-size: 1.2rem;
}
div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
}
`