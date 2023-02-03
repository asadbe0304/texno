import { createContext } from "react";


export const context = createContext({
    show: false,
    products:[

    ],
    cart:[],
    addProduct: product =>{},
    removeProduct:productId =>{}
});
// export default context