import { createContext, useState, useContext } from "react";

const AuthRegis = createContext({});

export  const AuthRegister = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthRegis.Provider value={{ auth, setAuth }}>
      {children}
    </AuthRegis.Provider>
  );
};

export default AuthRegis;

export const useAuth = () => {
  return useContext(AuthRegis);
};
