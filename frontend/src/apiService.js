import axios from 'axios';

const API_URL = 'http://192.168.0.200:5000';

export const signup = async (formData) => {
  const response = await axios.post(`${API_URL}/signup`, formData);
  const { access_token } = response.data;
  if (access_token) {
    localStorage.setItem('access_token', access_token);
  } else {
    console.error('No token received');
  }
  return response.data;
};

export const login = async (formData) => {
  const response = await axios.post(`${API_URL}/login`, formData);
  const { access_token } = response.data;
  if (access_token) {
    localStorage.setItem('access_token', access_token);
  } else {
    console.error('No token received');
  }
  return response.data;
};

export const fetchUserData = async () => {
  const access_token = localStorage.getItem('access_token');
  if (!access_token) {
    throw new Error('No token found');
  }

  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response.data.user;
};

export const logout = async () => {
  const access_token = localStorage.getItem('access_token');
  if (!access_token) {
    throw new Error('No token found');
  }

  const response = await axios.post(`${API_URL}/logout`, {}, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  localStorage.removeItem('access_token');
  return response.data;
};

