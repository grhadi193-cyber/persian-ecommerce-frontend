import axios from 'axios';
import toast from 'react-hot-toast';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Request interceptor — attach Bearer token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      toast.error('اتصال به سرور برقرار نشد. لطفاً دوباره تلاش کنید.');
      return Promise.reject(error);
    }

    const { status, data } = error.response;

    switch (status) {
      case 401: {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        toast.error('لطفاً وارد حساب کاربری خود شوید.');
        window.location.href = '/login';
        break;
      }
      case 404:
        toast.error('مورد درخواستی یافت نشد.');
        break;
      case 429:
        toast.error('درخواست\u200cهای زیاد. لطفاً چند ثانیه صبر کنید.');
        break;
      case 500:
        toast.error('خطای سرور. لطفاً بعداً تلاش کنید.');
        break;
      case 422:
      case 400: {
        const msg = data?.detail || data?.message || 'خطا در ارسال اطلاعات.';
        if (typeof msg === 'string') toast.error(msg);
        break;
      }
      default:
        break;
    }

    return Promise.reject(error);
  }
);

export default api;
