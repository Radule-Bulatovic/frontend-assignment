import { API_STORE } from './Api';

export const ENDPOINTS = {
  auth: {
    login: `${API_STORE}/auth/login`,
    register: `${API_STORE}/users`
  },
  products: {
    all: `${API_STORE}/products`,
    categories: `${API_STORE}/products/categories`
  }
};
