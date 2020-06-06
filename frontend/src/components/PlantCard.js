import React from 'react';
import { useDispatch } from 'react-redux';
import { plant } from "reducers/plantReducer"
import moment from 'moment'

export const PlantCard = (props) => {
    const { id, title, description } = props.item

    const dispatch = useDispatch()

    return (
        <li>
            {title} {id} {description}
        </li>
    )
}