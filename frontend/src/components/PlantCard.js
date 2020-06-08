import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { plant } from "reducers/plantReducer"
import moment from 'moment'


export const PlantCard = (props) => {
    const { imageUrl, id, title, description } = props.plant

    return (
        <>
            <h1> {id}, {title}, {description}</h1>
            <h2>THIS IS THE PLANT CARD</h2>
            <img className="details-img"
                src={imageUrl} alt={title} />
        </>
    )
}



/*  return (
     <li>
         {title} {description}
     </li>
 )
} */