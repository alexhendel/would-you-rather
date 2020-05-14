import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const history = useHistory();
  const authedUser = useSelector((state) => state.authedUser);

  if (!authedUser) {
    history.push('/signin');
  }
  return <Route {...props}>{props.children}</Route>;
};

export default ProtectedRoute;
