import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { user, logout, getProfileMessage } from '../reducers/user';
import { plant } from "../reducers/plantReducer"
import { Form, Button } from "../lib/Form"

const API_PLANTS = 'http://localhost:8080/plants'

export const AddPlant = () => {
    const fileInput = useRef()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()

    /*  const handleSubmit = (event) => {
         event.preventDefault()
 
     } */
    const handleFormSubmit = (e) => {
        //set state, loading true 
        const API_PLANTS = 'http://localhost:8080/plants'
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', fileInput.current.files[0]) // send all to backend
        formData.append('title', title)
        formData.append('description', description)
        formData.append('email', email)

        fetch(API_PLANTS, { method: 'POST', body: formData })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                dispatch(plant.actions.addPlant({ email, title, description, imageUrl: json.imageUrl, /* owner: user.login.userId  */ }))
            })
            .then(() => {
                setTitle("")
                setDescription("")
                setEmail("")
            })
    }
    return (
        <Form onSubmit={handleFormSubmit}>
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
                Email
            <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </label>
            <label>
                Image of your Green
        <input type="file" ref={fileInput} />
            </label>
            <button type="submit">
                Add your Plant
        </button>
        </Form>
    )
}


