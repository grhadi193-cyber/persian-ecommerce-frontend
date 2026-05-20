import api from './axios';

export const sendOtp = (phone_number) =>
  api.post('/auth/send-otp', { phone_number }).then((r) => r.data);

export const verifyOtp = (phone_number, code) =>
  api.post('/auth/verify-otp', { phone_number, code }).then((r) => r.data);

export const getProfile = () =>
  api.get('/auth/profile').then((r) => r.data);

export const updateProfile = (data) =>
  api.patch('/auth/profile', data).then((r) => r.data);

export const getAddresses = () =>
  api.get('/auth/addresses').then((r) => r.data);

export const createAddress = (data) =>
  api.post('/auth/addresses', data).then((r) => r.data);

export const deleteAddress = (id) =>
  api.delete(`/auth/addresses/${id}`).then((r) => r.data);

export const getUserOrders = () =>
  api.get('/auth/orders').then((r) => r.data);

export const getUserOrder = (id) =>
  api.get(`/auth/orders/${id}`).then((r) => r.data);

export const cancelOrder = (id) =>
  api.delete(`/auth/orders/${id}`).then((r) => r.data);
