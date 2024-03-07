import React, { useState } from 'react';

function TransactionsTable({ transactions, onPageChange }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handlePageChange = (direction) => {
    onPageChange(direction);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions"
        value={searchText}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => handlePageChange('prev')}>Previous</button>
      <button onClick={() => handlePageChange('next')}>Next</button>
    </div>
  );
}

export default TransactionsTable;
