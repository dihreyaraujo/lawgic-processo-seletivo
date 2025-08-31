import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_DEV_TOKEN}`
  }
});

const getNotificationFormData = async () => {
  const response = await api.get('/notifications/form');
  return response.data;
};

const apiService = {
  getNotificationFormData
};

export default apiService;