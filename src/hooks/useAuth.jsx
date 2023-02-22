import { useContext } from "react";
import  AuthRegister  from "../context/AuthResgister";

const useAuth = () => {
  return useContext( AuthRegister );
};

export default useAuth;
