import React from 'react';

function TransactionsStatistics({ statistics }) {
  return (
    <div>
      <h2>Statistics for {statistics.month}</h2>
      <p>Total sale amount: {statistics.totalSaleAmount}</p>
      <p>Total number of sold items: {statistics.totalSoldItems}</p>
      <p>Total number of not sold items: {statistics.totalNotSoldItems}</p>
    </div>
  );
}

export default TransactionsStatistics;