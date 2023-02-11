import { createContext, useState, useReducer, useContext } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, sumCart, sumLike } from "./ShopReducer";
const AuthContext = createContext({});

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const storageLike = localStorage.getItem("like")
  ? JSON.parse(localStorage.getItem("like"))
  : [];
export const AuthProvider = ({ children }) => {
  // const fetchData = async () => {
  //   const response = await axios.get("https://fakestoreapi.com/products");
  //   setdata(response.data);
  //   console.log(data);
  // };
  console.log(storage);
  console.log(storageLike);

  const products = [...Array(10)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));

  const [auth, setAuth] = useState({});
  const [state, dispatch] = useReducer(cartReducer, {
    product: products,
    like: storageLike,
    ...sumLike,
    cart: storage,
    ...sumCart,
    auth: {},
  });

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
