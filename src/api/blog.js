import api from './axios';

export const getBlogPosts = () =>
  api.get('/blog/posts').then((r) => r.data);

export const getBlogPost = (slug) =>
  api.get(`/blog/posts/${slug}`).then((r) => r.data);
