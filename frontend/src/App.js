/* TEST */

import React from "react";
import LoginForm from "./components/LoginForm";
import { Provider } from "react-redux";
import { configureStore, combineReducers, createStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import { compose, applyMiddleware } from "redux";
/* import { persistedState } from 'redux-localstorage' */
import { user } from "./reducers/user";
import { Home } from "components/Home";
import { plant } from "reducers/plantReducer";

const URL = "http://localhost:8080/users";

// Old store code
const reducer = combineReducers({
  user: user.reducer,
  plant: plant.reducer
})

// 1. Retrieve the localstorage and use it as our initial state
const persistedStateJSON = localStorage.getItem("green");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// 2. Create the store using the initial state
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
  );
}

/* // 1. Retrieve the localstorage and use it as our initial state
const persistedStateJSON = localStorage.getItem("green")
let persistedState = {}
if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}
console.log(`persistedState: ${JSON.stringify(persistedState)}`);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// 2. Create the store using the initial state
const store = createStore(reducer, persistedState, composeEnhancer(applyMiddleware(thunk)))
store.subscribe(() => saveToLocalStorage(store.getState()))


//3. Store the state in localstorage on ANY redux state change
store.subscribe(() => {
  localStorage.setItem("green", JSON.stringify(store.getState()))
}) */


