import api from './axiosInstance';

// Envoyer un message au Chat IA
export const sendMessageToIA = (message) => {
  return api.post('/chat', { message });
};
