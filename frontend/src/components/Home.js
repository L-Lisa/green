import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Navigate } from "./Nav"
import { LoginForm } from "./LoginForm"
import { Profile } from "../pages/Profile"
import { HomePage } from "../pages/HomePage"
import { About } from "../pages/About"
import { Plants } from "../pages/Plants"
import { Footer } from "./Footer"
import { SinglePlantPage } from "../pages/SinglePlantPage"
import { PlantList } from "./PlantList"
import { NavDropdownExample } from "./Nav"

export const Home = () => {
    return (
        <BrowserRouter>
            {/*  <NavDropdownExample /> */}
            <Navigate />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>

                    <Route path="/about" exact>
                        <About />
                    </Route>

                    <Route path="/sessions" exact>
                        <LoginForm />
                    </Route>

                    <Route path="/plants" exact>
                        <Plants />
                    </Route>

                    <Route path="/profile" exact>
                        <Profile />
                    </Route>

                    <Route path="/plants/:id" exact>
                        <SinglePlantPage />
                    </Route>

                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    )
}