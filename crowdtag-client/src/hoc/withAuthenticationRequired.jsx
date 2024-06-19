// src/components/withAuthenticationRequired.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const withAuthenticationRequired = (Component) => {
  return function ProtectedComponent(props) {
    const { isAuthenticated, isLoading } = useAuth0();
    const location = useLocation();

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Navigate to="/login" state={{ from: location }} />
    );
  };
};

export default withAuthenticationRequired;
