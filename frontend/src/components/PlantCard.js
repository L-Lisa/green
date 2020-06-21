/* import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { plant } from "reducers/plantReducer"
import moment from 'moment'


export const PlantCard = (props) => {
    const { imageUrl, id, title, description, email, owner } = props.plant

    return (
        <>
            <h1> {id}, {title}, {description} {email}</h1>
            <h2>THIS IS THE PLANT CARD</h2>
            <img className="details-img"
                src={imageUrl} alt={title} />
        </>
    )
} */

import { Card } from "./Card";
import styled from "styled-components/macro"
import React, { useState, useSelector, useEffect } from 'react'
import { plant } from "reducers/plantReducer"
import moment from 'moment'
import { Link } from "react-router-dom"


const ListItem = styled.li`
cursor: pointer;
margin: 5px;
text-decoration: none;
`;
const PlantCardInput = styled.div`
width: 300px;
height: 400px;
border: solid 1px rgba(0, 0, 0, 0.2);
box-shadow: 0px 10px 30px -15px rgba(0, 0, 0, 0.3);
margin-bottom: 2px;
border-radius: 3px;
background: white;
margin: 2px;
background-color: #9ec2a285;
h1{
list-style: none; 
-webkit-text-decoration: none;
text-decoration: none;
margin-bottom: 0;
padding: 13px 0 2px 2px;
height: 3rem;
text-justify: center;
font-size: 1.5rem;
text-align: center;

}
h2{
list-style: none;
text-decoration: none;
font-size: 1rem;
text-align: center;
}
img{
width: 100%;
height: 300px;
object-fit: cover;
}
`;


export const PlantCard = (props) => {
    const { imageUrl, _id, title, description, email, name } = props.plant

    return (
        < ListItem >
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={`/plants/${_id}`}>
                <PlantCardInput url={plant.imageUrl} key={plant._id}>
                    <img src={`${imageUrl}`} alt={title} />
                    {title && <h1>{title} {/* {name} */}</h1>}
                </PlantCardInput>
            </Link>
        </ListItem >
    );
}
/* export const PlantCard = (props) => {
    const { imageUrl, id, title, description, email, owner } = props.plant
    console.log(plant)
    return (
        <ListItem>
            <Link to={`/plants/${id}`}>
                <div>
                    <h1> {title}</h1>
                    <img src={plant.imageUrl} key={plant.id} />
                    <h2>{description}</h2>
                </div>
            </Link>
        </ListItem>
    )
} */