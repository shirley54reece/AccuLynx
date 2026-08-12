import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = ['Material', 'Labor', 'Transport'];

  return (
    <ul className="list">
      {expenses.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ExpenseList;
