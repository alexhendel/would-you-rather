import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const authedUser = useSelector((state) => state.authedUser);

  return (
    <>
      {authedUser ? (
        <Route {...props}>{props.children}</Route>
      ) : (
        <Redirect to="/signin" />
      )}
    </>
  );
};

export default ProtectedRoute;
