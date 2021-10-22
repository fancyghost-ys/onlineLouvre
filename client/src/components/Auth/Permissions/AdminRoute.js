import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
    const IsLoggedIn = useSelector(state => state.authReducer.IsLoggedIn)
    const role = useSelector(state => state.authReducer.role)
    return (
        <Route
            {...rest}
            render={props =>
            (IsLoggedIn && role === 1 ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
            )}
        />
    )
}

export default AdminRoute;