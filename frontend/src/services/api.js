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

const createNotification = async (data) => {
  const response = await api.post('/notifications', data);
  return response.data;
};

const getNotificationById = async (id) => {
  const response = await api.get(`/notifications/${id}`);
  return response.data;
};

const updateNotification = async (id, data) => {
  const response = await api.put(`/notifications/${id}`, data);
  return response.data;
};

const updateStatus = async (id, status) => {
  const response = await api.patch(`/notifications/${id}/status`, { nextStatus: status });
  return response.data;
};

const apiService = {
  getNotificationFormData,
  createNotification,
  getNotificationById,
  updateNotification,
  updateStatus
};

export default apiService;