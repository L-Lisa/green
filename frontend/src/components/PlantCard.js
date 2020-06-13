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
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { plant } from "reducers/plantReducer"
import moment from 'moment'


const PlantCardInput = styled(Card)`
  width: 300px;
`;

const Link = styled.li`
list-style: none;
cursor: pointer;
text-decoration:none;
margin: 5px;
`;

export const PlantCard = (props) => {
    const { imageUrl, _id, id, title, description, email, owner } = props.plant
    console.log(email)
    return (

        <Link to={`/plants/${_id}`} className="a-tag">
            <PlantCardInput
                coverImage={imageUrl}
                title={title}
                secondaryText={description}
                buttonText={`I want one ${email}`}
            />
        </Link>
    );
}
