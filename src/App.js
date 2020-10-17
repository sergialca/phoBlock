import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Profile from "./pages/profile/profile";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import './App.scss';

function App() {
  return (
    <Switch>
                                    <Route path="/login" component={Login} />
                                    <Route path="/signup" component={Signup} />
                                    <Route
                                        path="/"
                                        exact
                                        component={Home}
                                        
                                    />
                                    <Route path="/about" component={About} />
                                    <Route path="/login" component={Profile} />
                                    <Redirect to="/" />
                                </Switch>
  );
}

export default App;
