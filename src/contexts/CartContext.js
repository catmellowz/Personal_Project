import { createContext, useEffect, useState } from 'react';
import * as cartApi from '../apis/cart-api';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [countCart, setCountCart] = useState(0);

  const addCart = async (serviceId) => {
    // setCountCart(countCart + 1);
    await cartApi.createCart({ serviceId });
    //get service from cart
    const res = await cartApi.amountCart();
    setCountCart(res.data.amount);
    console.log(res);
  };

  const deleteCart = () => {
    if (countCart >= 1) {
      setCountCart(countCart - 1);
    }
  };

  useEffect(() => {
    const fetchAmountCart = async () => {
      try {
        const res = await cartApi.amountCart();
        setCountCart(res.data.amount);
      } catch (err) {}
    };
    fetchAmountCart();
  }, []);

  return (
    <CartContext.Provider value={{ countCart, addCart, deleteCart }}>
      {children}
    </CartContext.Provider>
  );
}
