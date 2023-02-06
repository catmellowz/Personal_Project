import { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [countCart, setCountCart] = useState(0);

  const addCart = () => {
    setCountCart(countCart + 1);
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
