import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const service = {
  async getAccountStats() {
    const response = await api.get("/accountStats");
    return response.data;
  },

  async getAccounts() {
    const response = await api.get("/accounts");
    return response.data;
  },

  async getCreditCards() {
    const response = await api.get("/creditCards");
    return response.data;
  },
};

export default api;
