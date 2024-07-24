import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedPage = ({ code, children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [triedToAuthenticate, setTriedToAuthenticate] = useState(false);

  useEffect(() => {
    const userCode = prompt('Enter the access code:');
    if (userCode === code) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect code. You will be redirected to the home page.');
    }
    setTriedToAuthenticate(true);
  }, [code]);

  if (!triedToAuthenticate) {
    return null; // Wait until the user enters the code
  }

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedPage;
