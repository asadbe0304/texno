import {
  createContext,
  useState,
  useReducer,
  useContext,
  useEffect,
} from "react";
import {faker} from "@faker-js/faker"
import { cartReducer } from "./ShopReducer";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {


  // const fetchData = async () => {
  //   const response = await axios.get("https://fakestoreapi.com/products");
  //   setdata(response.data);
  //   console.log(data);
  // };

  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    // inStock: Array([1,2,3,4,5,6,7,8,9,10])
  }));
  const [auth, setAuth] = useState({});
  const [state, dispatch] = useReducer(cartReducer, {
    product: products,
    cart: [],
    auth: {},
  });
// console.log(data);


  return (
    <AuthContext.Provider value={{ auth, setAuth , state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export const CartState = () => {
  return useContext(AuthContext);
};