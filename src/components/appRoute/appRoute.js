import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/user";

const AppRoute = ({ component: Component, render, ...rest }) => {
    const { user } = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={(props) => {
                if (!user.logged) return <Redirect to="/login" />;
                return Component ? (
                        <Component {...props} />
                ) : (
                    render(props)
                );
            }}
        />
    );
};
export default AppRoute;
