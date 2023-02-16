import {
  createContext,
  useState,
  useReducer,
  useContext,
  useEffect,
} from "react";
import axios from "axios";
import { cartReducer, sumCart, sumLike } from "./ShopReducer";
const AuthContext = createContext({});
const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const storageLike = localStorage.getItem("like")
  ? JSON.parse(localStorage.getItem("like"))
  : [];
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [state, dispatch] = useReducer(cartReducer, {
    product: [],
    like: storageLike,
    ...sumLike,
    cart: storage,
    ...sumCart,
    auth: {},
    opencart: false,
    byRating: 0,
    searchQuery: [],
    search: false,
    searchMobile: false,
  });

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch({
          type: "FETCH_DATA_SUCCESS",
          payload: { data: response.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_DATA_FAILURE",
          payload: { error: error.message },
        });
      });
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth, state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export const CartState = () => {
  return useContext(AuthContext);
};
