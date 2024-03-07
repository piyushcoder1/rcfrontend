import React from 'react';

function TransactionsBarChart({ barChartData }) {
  return (
    <div>
      <h2>Bar Chart</h2>
      <div>
        {barChartData.map((data) => (
          <div key={data.range}>
            <p>{data.range}</p>
            <p>{data.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionsBarChart;
