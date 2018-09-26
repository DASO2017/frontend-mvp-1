import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const UserRoute = ({isAuthenticated: isAuthenticated, component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => 
            isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}
    />
);

export default UserRoute;