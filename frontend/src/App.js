import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { user } from "./reducers/user";
import { Home } from "components/Home";
import { plant } from "reducers/plantReducer";

const URL = "https://home-grown-green.herokuapp.com//users";

const reducer = combineReducers({
  user: user.reducer,
  plant: plant.reducer
})

const store = configureStore({ reducer });

export const App = () => {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
