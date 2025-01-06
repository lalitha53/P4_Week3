import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal((prevTotal) => prevTotal + product.price);
  };

  const removeFromCart = (index) => {
    const removedItem = cart[index];
    setCart(cart.filter((_, i) => i !== index));
    setTotal((prevTotal) => prevTotal - removedItem.price);
  };

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal((prevTotal) => prevTotal + product.price);
  };

  const removeFromCart = (index) => {
    const removedItem = cart[index];
    setCart(cart.filter((_, i) => i !== index));
    setTotal((prevTotal) => prevTotal - removedItem.price);
  };

  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
