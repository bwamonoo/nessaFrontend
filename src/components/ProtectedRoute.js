import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { NessaContext } from '../context/NessaContext';

const ProtectedRoute = ({ element }) => {
  const { currentUser, loading } = useAuth();
  const { username, handleUsername } = useContext(NessaContext);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking authentication status
  }

  if (currentUser) {
    console.log('currentUsser fullname:', currentUser.full_name);
    handleUsername(currentUser.full_name);
  }

  if (currentUser.user_group_id == 2) {
    return <Navigate to="/vendor" />;
  }

  return currentUser ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
