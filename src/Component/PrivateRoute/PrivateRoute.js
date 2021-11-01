import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {

    const {user, isLoading} =useAuth();
    if(isLoading){
        return <div ClassName="spinner-border" role="status">
        <span ClassName="visually-hidden">Loading...</span>
      </div>
    }
    return (
        <Route
        {...rest}
        render={({location}) => user.email ? children: <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        
        ></Redirect>}

        >
            
        </Route>
    );
};

export default PrivateRoute;