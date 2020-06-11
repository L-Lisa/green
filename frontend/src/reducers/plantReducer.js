import { createSlice } from '@reduxjs/toolkit'

export const plant = createSlice({
    name: 'plant',
    initialState: {
        plants: [
        ],
    },
    reducers: {
        addPlant: (state, action) => {

            const { title, description, imageUrl } = action.payload
            state.plants.push({
                id: Date.now(),
                title,
                description,
                imageUrl,
                owner
            })
        },
        removePlant: (state, action) => {
            state.plants = state.plants.filter((plant) => plant.id !== action.payload)
        },
        removeItem: (state, action) => {
            state.plant = state.plant.filter((plant) => item.id !== action.payload)
        },
    },
})
