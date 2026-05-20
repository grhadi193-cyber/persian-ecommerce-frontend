import api from './axios';

export const getSiteSettings = () =>
  api.get('/settings').then((r) => r.data);
