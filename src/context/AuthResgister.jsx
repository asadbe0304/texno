import { createContext, useState } from "react";

const AuthRegis = createContext({});

export const AuthRegister = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
      <AuthRegis.Provider value={ {auth, setAuth}}>
          {children}
      </AuthRegis.Provider>
  )
}

// export default AuthRegister;
