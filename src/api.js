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

  async createCreditCard(data) {
    const response = await api.post("/creditCards", data);
    return response.data;
  },

  async getAccountById(id) {
    const response = await api.get(`/accounts/${id}`);
    return response.data;
  },

  async getCreditCardById(id) {
    const response = await api.get(`/creditCards/${id}`);
    return response.data;
  },

  async updateAccount(id, data) {
    const response = await api.put(`/accounts/${id}`, data);
    return response.data;
  },

  async updateCreditCard(id, data) {
    const response = await api.put(`/creditCards/${id}`, data);
    return response.data;
  },

  async deleteAccount(id) {
    const response = await api.delete(`/accounts/${id}`);
    return response.data;
  },

  async deleteCreditCard(id) {
    const response = await api.delete(`/creditCards/${id}`);
    return response.data;
  },

  async getTotalBalance() {
    const response = await api.get("/accounts");
    const totalBalance = response.data.reduce(
      (acc, account) => acc + account.balance,
      0
    );
    return totalBalance;
  },

  async createAccount(data) {
    const response = await api.post("/accounts", data);
    return response.data;
  },
};

export default api;
