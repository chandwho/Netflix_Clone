import React from 'react';
import { Navigate } from 'react-router-dom';
import { userAuth } from '../context/AuthContext';

/* Only go to account page id user logged in, else go to home */

export default function ProtectedRoute({ children }) {
  const { user } = userAuth();
  if (user) {
    return children
  }else{
    return <Navigate to='/' />
  }
}
