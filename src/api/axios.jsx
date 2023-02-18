import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5173",
});

const baseURL = "https://fakestoreapi.com/";

export const API = {
  getAll: async () => axios.get(`${baseURL}/products`),
  getName: async () => axios.get(`${baseURL}/products/`)
};
