import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NoMatch = () => {
  const location = useLocation();
  return (
    <>
      <h1>404 - Not Found</h1>
      <p>
        Sorry the URL <b>{location.pathname}</b> was not found. Get back{' '}
        <Link to="/">/home</Link>.
      </p>
    </>
  );
};

export default NoMatch;
