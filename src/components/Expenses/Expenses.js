import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      {props.expenses.map((item) => {
        return (
          <ExpenseItem
            expenseDate={item.date}
            expenseName={item.title}
            expenseAmount={item.amount}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
