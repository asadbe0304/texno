import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5173",
});

const baseURL = "https://fakestoreapi.com/products";

// export const API = {
//   getAll: async () => axios.get(`${baseURL}`),
//   getCategory: async (categories) =>
//     axios.get(`${baseURL}/categories${categories}`),
// };
