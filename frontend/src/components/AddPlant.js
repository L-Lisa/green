import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { user, logout, getProfileMessage } from '../reducers/user';
import { plant } from "../reducers/plantReducer"


export const AddPlant = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(plant.actions.addPlant({ title, description }))
        setTitle("")
        setDescription("")//clearing input
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
            <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </label>
            <label>
                Description
            <input
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            <button type="submit">
                Add your Plant
        </button>
        </form>
    )
}