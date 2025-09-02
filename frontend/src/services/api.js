import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_DEV_TOKEN}`
  }
});

const getNotificationFormData = async () => {
  const response = await api.get('/form-schema');
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
  console.log("DATACHAMADA: ", data);
  const response = await api.put(`/notifications/${id}`, data);
  console.log("RESPONSEDATA: ", response.data);
  return response.data;
};

const updateStatus = async (id, status) => {
  const response = await api.patch(`/notifications/${id}/status`, { nextStatus: status });
  return response.data;
};

const getNotifications = async () => {
  const response = await api.get('/notifications');
  return response.data;
};

export {
  getNotificationFormData,
  createNotification,
  getNotificationById,
  getNotifications,
  updateNotification,
  updateStatus
};