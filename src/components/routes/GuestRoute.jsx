import React from 'react';
import {Route} from 'react-router-dom';

const GuestRoute = ({isAuthenticated: isAuthenticated, component: Component, ...rest}) => (
    <Route 
        {...rest}
        render={
            props =>
                !isAuthenticated ? <Component isAuthenticated={isAuthenticated} {...props} /> : <Component isAuthenticated={isAuthenticated} {...props} />
        }
    />
);

export default GuestRoute;