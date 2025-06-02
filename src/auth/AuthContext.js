// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authData, setAuthData] = useState({ token: null, role: null });

//   const login = (token, role) => {
//     setAuthData({ token, role });
//   };

//   const logout = () => {
//     setAuthData({ token: null, role: null });
//   };

//   return (
//     <AuthContext.Provider value={{ authData, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(null); // Only store role in frontend

  const login = (newRole) => {
    setRole(newRole);
  };

  const logout = () => {
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
