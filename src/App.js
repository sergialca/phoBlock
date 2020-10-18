import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Profile from "./pages/profile/profile";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import { UserContext } from "./context/user";
import "./App.scss";
import vote_and_proposal from "./pages/vote_and_proposal/vote_and_proposal";

function App() {
    const getUserLoged = () => {
        const session = localStorage.getItem(`phouser`);
        if (session) {
            return session.token
                ? {
                      logged: true,
                      name: session.name,
                      mail: session.email,
                      token: session.sessionToken,
                  }
                : { logged: false };
        } else return { logged: false };
    };

    const [user, setUser] = useState(getUserLoged());

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Profile} />
                <Route path="/vote_and_proposal" component={vote_and_proposal} />

                <Redirect to="/" />
            </Switch>
        </UserContext.Provider>
    );
}

export default App;
