import axios from "axios";
const API_URL = "/api/emails";

export const sendEmail = async (token, emailData) => {
  const res = await axios.post(API_URL, emailData, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

export const getEmails = async (token) => {
  const res = await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};
