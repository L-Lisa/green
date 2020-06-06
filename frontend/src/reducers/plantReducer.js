import { createSlice } from '@reduxjs/toolkit'

export const plant = createSlice({
    name: 'plant',
    initialState: {
        plants: [
            { id: 1, title: 'Green', description: " pretty thing" },
        ],
    },
    reducers: {
        addPlant: (state, action) => {
            const { title, description } = action.payload
            state.plants.push({
                id: Date.now(),
                title,
                description
            })
        },
        removePlant: (state, action) => {
            state.plants = state.plants.filter((plant) => plant.id !== action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
    },
})
