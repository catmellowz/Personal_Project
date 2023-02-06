import { createContext, useState } from 'react';
import * as cartApi from '../apis/cart-api';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [countCart, setCountCart] = useState(0);

  const addCart = async (serviceId) => {
    // setCountCart(countCart + 1);
    const res = await cartApi.createCart({ serviceId });
    //get service from cart
    console.log(res);
  };

  const deleteCart = () => {
    if (countCart >= 1) {
      setCountCart(countCart - 1);
    }
  };
  return (
    <CartContext.Provider value={{ countCart, addCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
}
