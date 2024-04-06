// apiEndpoints.js

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const API_ENDPOINTS = {
  LOGIN: `${BASE_URL}/login`,
  REGISTER: `${BASE_URL}/register`,
  USER_PROFILE: `${BASE_URL}/user/profile`,
  // Add more endpoints as needed
};
