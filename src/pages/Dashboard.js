import React, { useState, useEffect } from 'react';
import TransactionsTable from '../components/TransactionsTable';
import TransactionsStatistics from '../components/TransactionsStatistics';
import TransactionsBarChart from '../components/TransactionsBarChart';
import MonthSelector from '../components/MonthSelector';
import api from '../services/api';

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('March');

  useEffect(() => {
    loadTransactions();
    loadStatistics();
    loadBarChartData();
  }, [selectedMonth]);

  const loadTransactions = async () => {
    try {
      const response = await api.get(`/transactions?month=${selectedMonth}`);
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const loadStatistics = async () => {
    try {
      const response = await api.get(`/transactions/statistics?month=${selectedMonth}`);
      setStatistics(response.data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  const loadBarChartData = async () => {
    try {
      const response = await api.get(`/transactions/bar-chart?month=${selectedMonth}`);
    }
    catch (error) {
        console.error('Error fetching statistics:', error);
      }
}
};
