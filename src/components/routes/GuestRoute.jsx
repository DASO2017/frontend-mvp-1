import React from 'react';
import {Route} from 'react-router-dom';

const GuestRoute = ({isAuthenticated: isAuthenticated, component: Component, ...rest}) => (
    <Route 
        {...rest}
        render={
            props =>
                !isAuthenticated ? <Component {...props} /> : <Component {...props} />
        }
    />
);

export default GuestRoute;