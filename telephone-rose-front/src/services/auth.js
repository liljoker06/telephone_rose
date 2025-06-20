// services/auth.js
import api from './axiosInstance';

// Inscription
export const registerUser = (pseudo, password) => {
  return api.post('/auth/register', { pseudo, password });
};

// Connexion
export const loginUser = (pseudo, password) => {
  return api.post('/auth/login', { pseudo, password });
};

// Déconnexion
export const logoutUser = () => {
  return api.post('/auth/logout');
};
