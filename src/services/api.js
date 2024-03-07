import axios from 'axios';

const baseURL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL,
});

export const listTransactions = async (queryParams) => {
  try {
    const response = await api.get('/transactions', { params: queryParams });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching transactions');
  }
};

export const getTransactionStatistics = async (month) => {
  try {
    const response = await api.get(`/transactions/statistics?month=${month}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching transaction statistics');
  }
};

export const getBarChartData = async (month) => {
  try {
    const response = await api.get(`/transactions/bar-chart?month=${month}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching bar chart data');
  }
};

export default api;