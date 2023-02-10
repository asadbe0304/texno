import React, { useContext } from 'react';
import {CartContext} from "./../context/Auth"

export const useCart = () => {
   
    const ctx = useContext(CartContext)

    return {
        ...ctx
    }
}