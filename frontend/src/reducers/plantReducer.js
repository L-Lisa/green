import { createSlice } from '@reduxjs/toolkit'

export const plant = createSlice({
    name: 'plant',
    initialState: {
        plants: [
        ],
    },
    reducers: {
        addPlant: (state, action) => {

            const { title, description, imageUrl, email, owner } = action.payload
            state.plants.push({
                id: Date.now(),
                title,
                description,
                email,
                imageUrl,
                owner
            })
        },
        removePlant: (state, action) => {
            state.plants = state.plants.filter((plant) => plant._id !== action.payload)
        },
    },
})
