import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { user, logout, getProfileMessage } from '../reducers/user';
import { plant } from "../reducers/plantReducer"
import { Form, Button } from "../lib/Form"
import styled from 'styled-components'

const API_PLANTS = 'https://home-grown-green.herokuapp.com/plants'

export const AddPlant = () => {
    const fileInput = useRef()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    /*  const handleSubmit = (event) => {
         event.preventDefault()
 
     } */
    const handleFormSubmit = (e) => {
        //set state, loading true 
        const API_PLANTS = 'https://home-grown-green.herokuapp.com/plants'
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', fileInput.current.files[0]) // send all to backend
        formData.append('title', title)
        formData.append('description', description)
        formData.append('email', email)
        formData.append('name', name)

        fetch(API_PLANTS, { method: 'POST', body: formData })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                dispatch(plant.actions.addPlant({ name, email, title, description, imageUrl: json.imageUrl, /* owner: user.login.userId  */ }))
            })
            .then(() => {
                setTitle("")
                setDescription("")
                setEmail("")
                setName("")
            })
    }
    return (
        <div>
            <Form onSubmit={handleFormSubmit}>
                <h1>Add a plant here. </h1>
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
                    Your Name
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    /> {/* get workign or remove!! */}
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
                    Image
        <input type="file" ref={fileInput} />
                </label>
                <button type="submit">
                    Add your Plant
        </button>
            </Form>
        </div>
    )
}


