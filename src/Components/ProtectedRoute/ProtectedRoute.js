import React, { useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import PasswordPrompt from '../PasswordPrompt/PasswordPrompt';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Route
      {...rest}
      element={
        authenticated ? (
          <Element />
        ) : (
          <PasswordPrompt onSuccess={() => setAuthenticated(true)} />
        )
      }
    />
  );
};

export default ProtectedRoute;

