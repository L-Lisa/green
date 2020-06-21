import { createSlice } from '@reduxjs/toolkit'
import React from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

// loader reducer
export const loader = createSlice({
    name: "loader",
    initialState: {
        isLoading: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.plant = action.payload
        }
    }
})

//Loader item
export const Loading = () => {
    return (
        <Loader
            type="Puff"
            color="#00BFFF"
            height={50}
            width={100}
            timeout={3000} //3 secs
        />
    )
}
