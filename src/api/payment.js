import api from './axios';

export const initiatePayment = (order_id) =>
  api.post('/payment/initiate', { order_id }).then((r) => r.data);

export const paymentCallback = (params) =>
  api.get('/payment/callback', { params }).then((r) => r.data);
