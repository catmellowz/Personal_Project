import axios from '../config/axios';

export const createCart = (serviceId) =>
  axios.post('/cart', serviceId);
//crate item in ccart

export const amountCart = () => axios.get('/cart');
//amount of cart at navbar
export const cartItem = () => axios.get('/cart/cartItem');
//amount item in cart page
export const deleteItem = (cartId) => axios.delete(`/cart/${cartId}`);
