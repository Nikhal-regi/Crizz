import axios from "axios";

// Base URL of the backend server
const API_BASE_URL = "http://localhost:5000"; // Replace with your backend URL

export const getMatchStats = (matchId) => {
  return axios.get(`${API_BASE_URL}/api/scoring/match/${matchId}`);
};

export const addDelivery = (deliveryData) => {
  return axios.post(`${API_BASE_URL}/api/scoring/delivery`, deliveryData);
};
