import api from './axios';

export const getUserOrders = () =>
  api.get('/auth/orders').then((r) => r.data);

export const getUserOrder = (id) =>
  api.get(`/auth/orders/${id}`).then((r) => r.data);

export const cancelOrder = (id) =>
  api.delete(`/auth/orders/${id}`).then((r) => r.data);
