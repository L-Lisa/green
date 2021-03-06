import { createSlice } from '@reduxjs/toolkit'
import { Loading, loader } from "reducers/Loading"

export const plant = createSlice({
    name: 'plant',
    initialState: {
        plants: [
        ],
    },
    reducers: {
        addPlant: (state, action) => {
            const { name, title, description, imageUrl, email } = action.payload
            state.plants.unshift({
                id: Date.now(),
                title,
                description,
                email,
                imageUrl,
                name
            })
        },
        setPlants: (state, action) => {
            state.plants = action.payload.plants
        },
        removePlant: (state, action) => {
            state.plants = state.plants.filter((plant) => plant._id !== action.payload)
        },
    },
})
// thunk 
export const fetchPlants = () => {
    const API_PLANTS = 'https://home-grown-green.herokuapp.com/plants'
    return (dispatch) => {
        dispatch(loader.actions.setLoading(true))
        fetch(API_PLANTS)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw 'Could not get plants';
            })
            .then((json) => {
                dispatch(
                    plant.actions.setPlants({ plants: json, })
                );
                dispatch(loader.actions.setLoading(false))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}