import axios from '../config/axios';

export const getService = () => axios.get('/service');
