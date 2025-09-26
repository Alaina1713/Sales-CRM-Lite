import axios from "axios";
const API_URL = "/api/auth";

export const loginUser = async (email, password) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  return res.data;
};

export const registerUser = async (name, email, password, role) => {
  const res = await axios.post(`${API_URL}/register`, { name, email, password, role });
  return res.data;
};
