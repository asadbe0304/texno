import {
  createContext,
  useState,
  useReducer,
  useContext,
  useEffect,
} from "react";
import axios from "axios";
import { cartReducer, sumCart, sumLike} from "./ShopReducer";

// create context  provider
const AuthContext = createContext({});
// create context provider

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const storageLike = localStorage.getItem("like")
  ? JSON.parse(localStorage.getItem("like"))
  : [];


//   const handleCheckout = () => {
//     console.log('CHECK');
//     dispatch({type: 'CHECK'})
// }

const initialState = {
  product: [],
  category: [],
  searchQuery: [],
  opencart: false,
  search: false,
  searchMobile: false,
  modal: false,
  clear: false,
  open: false,
  loading:false,
  like: storageLike,
  ...sumLike,
  cart: storage,
  ...sumCart,
  byRating: 0,
  byPrice: 0,
  // checkout: true
};

export const AuthProvider = ({ children }) => {
  // const [auth, setAuth] = useState({});
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // get all product
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

  // get all product category
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        dispatch({
          type: "FETCH_DATA_CATEGORY",
          payload: { data: response.data },
        });
      });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export const CartState = () => {
  return useContext(AuthContext);
};
