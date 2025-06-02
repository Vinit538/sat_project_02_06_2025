// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const ProtectedRoute = ({ children }) => {
//   const { authData } = useAuth();

//   if (!authData.token || authData.role !== 'admin') {
//     return <Navigate to="/satLogin" />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { role } = useAuth();

  if (role !== 'admin') {
    return <Navigate to="/satLogin" />;
  }

  return children;
};

export default ProtectedRoute;
