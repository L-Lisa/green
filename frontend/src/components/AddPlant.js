import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { user, logout, getProfileMessage } from '../reducers/user';
import { plant } from "../reducers/plantReducer"

const API_PLANTS = 'http://localhost:8080/plants'
export const AddPlant = () => {
    const fileInput = useRef()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()

    /*  const handleSubmit = (event) => {
         event.preventDefault()
 
     } */
    const handleFormSubmit = (e) => {
        const API_PLANTS = 'http://localhost:8080/plants'
        e.preventDefault()
        dispatch(plant.actions.addPlant({ title, description }))
        /*   setTitle("")
          setDescription("")//clearing input, should I keep this??? */
        const formData = new FormData()
        formData.append('image', fileInput.current.files[0])
        formData.append('title', title)

        fetch(API_PLANTS, { method: 'POST', body: formData })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
            })
    }
    return (
        <form onSubmit={handleFormSubmit}>
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
                    type="text-area"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </label>
            <label>
                Image of your Green
        <input type="file" ref={fileInput} />
            </label>
            <button type="submit">
                Add your Plant
        </button>
        </form>
    )
}