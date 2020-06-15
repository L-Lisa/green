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
import { Link } from "react-router-dom"


const PlantCardInput = styled(Card)`
  width: 300px;
  height: 400px
`;

const ListItem = styled.li`
list-style: none;
cursor: pointer;
text-decoration:none;
margin: 5px;
text-decoration: none;
`;

export const PlantCard = (props) => {
    const { imageUrl, _id, id, title, description, email, owner } = props.plant
    return (
        <ListItem>
            {/*  <Link to={`/plants/${_id}`}> */}
            <PlantCardInput
                _id={_id}
                coverImage={imageUrl}
                title={title}
                secondaryText={description}
                buttonText={`I want one ${email}`}
            />
            {/*  </Link> */}
        </ListItem>
    );
}
