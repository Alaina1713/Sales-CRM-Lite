import axios from "axios";
const API_URL = "/api/leads";

export const getLeads = async (token, filter = {}) => {
  const params = new URLSearchParams(filter);
  const res = await axios.get(`${API_URL}?${params}`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

export const createLead = async (token, leadData) => {
  const res = await axios.post(API_URL, leadData, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

export const updateLead = async (token, id, leadData) => {
  const res = await axios.put(`${API_URL}/${id}`, leadData, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

export const deleteLead = async (token, id) => {
  const res = await axios.delete(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};
