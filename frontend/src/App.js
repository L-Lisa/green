import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { user } from "./reducers/user";
import { Home } from "components/Home";

const URL = "http://localhost:8080/users";

const reducer = combineReducers({ user: user.reducer });

const store = configureStore({ reducer });

export const App = () => {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
