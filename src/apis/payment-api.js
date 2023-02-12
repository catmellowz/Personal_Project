import axios from '../config/axios';

//api sent slip from font
export const getSlip = (slipImage) =>
  axios.post('/payment/uploadslip', slipImage);

export const createOrder = (link) => axios.post('/payment', link);

export const getOrderHistory = () => axios.get('/orderhistory');

export const orderAdmin = () => axios.get('/orderhistory/admin');

export const statusOrder = (status) =>
  axios.put('/payment/status', status);
