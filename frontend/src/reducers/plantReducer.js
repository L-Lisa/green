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
        //set loader
        fetch(API_PLANTS)
            .then((res) => {
                if (res.ok /* if 200, 201, 204 */) {
                    return res.json();
                }
                // Not OK
                throw 'Could not get plants';
            })
            .then((json) => {
                // Save the plants to redux
                dispatch(
                    plant.actions.setPlants({
                        plants: json,
                    })
                );
                // loader false
            })
            .catch((err) => {
                console.log(err)
            });
    };
};