import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...props }) => {
    const IsLoggedIn = useSelector(state => state.authReducer.IsLoggedIn)
    return (
        <Route
            {...props}
            render={props => (
                IsLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            )}
        />
    )
}

export default PrivateRoute;