import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppRoute from "./components/appRoute/appRoute";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Profile from "./pages/profile/profile";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import { UserContext } from "./context/user";
import Parse from "parse";
import "./App.scss";

function App() {
    const { REACT_APP_ID, REACT_APP_KEY } = process.env;

    const getUserLoged = () => {
        const session = JSON.parse(localStorage.getItem(`Parse/${REACT_APP_ID}/currentUser`));
        if (session) {
            return session.sessionToken
                ? {
                      logged: true,
                      author: session.author,
                      mail: session.email,
                      wallet: session.wallet,
                      token: session.sessionToken,
                  }
                : { logged: false };
        } else return { logged: false };
    };

    const [user, setUser] = useState(getUserLoged());

    Parse.serverURL = "https://parseapi.back4app.com";
    Parse.initialize(REACT_APP_ID, REACT_APP_KEY);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/about" component={About} />
                <AppRoute path="/profile" component={Profile} />
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
        </UserContext.Provider>
    );
}

export default App;
