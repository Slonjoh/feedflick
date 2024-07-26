import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

export const signup = async (formData) => {
  const response = await axios.post(`${API_URL}/signup`, formData);
  return response.data;
};

export const login = async (formData) => {
  const response = await axios.post(`${API_URL}/login`, formData);
  return response.data;
};

export const fetchUserData = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }

  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.user;
};

export const logout = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }

  const response = await axios.post(`${API_URL}/logout`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  localStorage.removeItem('token');
  return response.data;
};

