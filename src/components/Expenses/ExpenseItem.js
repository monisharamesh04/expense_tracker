import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <ExpenseDate expenseDate={props.expenseDate} />
      <div className='expense-item__description'>
        <h2>{props.expenseName}</h2>
        <div className='expense-item__price'>Rs. {props.expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
