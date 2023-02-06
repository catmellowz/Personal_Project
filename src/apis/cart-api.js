import axios from '../config/axios';

export const createCart = (serviceId) =>
  axios.post('/cart', serviceId);
