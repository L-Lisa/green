import React from "react"
import { Provider } from "react-redux"
import { configureStore, combineReducers, createStore } from "@reduxjs/toolkit"
import thunk from 'redux-thunk'
import { compose, applyMiddleware } from "redux"
import { user } from "./reducers/user"
import { Home } from "components/Home"
import { plant } from "reducers/plantReducer"
import { Loading, loader } from "reducers/Loading"

const URL = "https://home-grown-green.herokuapp.com/"

const reducer = combineReducers({
  user: user.reducer,
  plant: plant.reducer,
  loader: loader.reducer,
})

// Store & state
const persistedStateJSON = localStorage.getItem("green")
let persistedState = {}
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, persistedState, composeEnhancer(applyMiddleware(thunk)))
store.subscribe(() => {
  localStorage.setItem("green", JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

















{/* <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script> */ }