import api from './axios';

export const getShippingMethods = () =>
  api.get('/shipping/methods').then((r) => r.data);

export const getShippingOptions = (data) =>
  api.post('/shipping/options', data).then((r) => r.data);
