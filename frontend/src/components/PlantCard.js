import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { plant } from "reducers/plantReducer"
import moment from 'moment'


export const PlantCard = (props) => {
    const { id, title, description } = props.item

    return (
        <h1> {id}, {title}, { description}</h1>
    )
}



/*  return (
     <li>
         {title} {description}
     </li>
 )
} */