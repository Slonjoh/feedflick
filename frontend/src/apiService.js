import axios from 'axios';

const API_URL = 'http://192.168.0.200:5000';

// Helper function to validate JWT format
const isValidJWT = (token) => {
  const parts = token.split('.');
  return parts.length === 3;
};


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
  console.log('Token retrieved from localStorage:', token); // Log the retrieved token

  if (!token) {
    throw new Error('No token found');
  }

  if (!isValidJWT(token)) {
    throw new Error('Invalid token format');
  }

  try {
    const response = await axios.get(`${API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user;
  } catch (error) {
    console.error('Error fetching user data:', error.response || error.message);
    throw error;
  }
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

