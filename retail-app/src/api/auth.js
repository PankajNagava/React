import axios from "axios";

const API_URL = "https://your-backend-api.com"; // Replace with your backend URL

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};
