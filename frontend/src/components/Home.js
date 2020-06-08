import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Nav } from "./Nav"
import { LoginForm } from "./LoginForm"
import { Profile } from "../pages/Profile"
import { HomePage } from "../pages/HomePage"
import { About } from "../pages/About"
import { Plants } from "../pages/Plants"

export const Home = () => {
    return (
        <BrowserRouter>

            <Nav />
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

                </Switch>
            </main>
        </BrowserRouter>

    )
}