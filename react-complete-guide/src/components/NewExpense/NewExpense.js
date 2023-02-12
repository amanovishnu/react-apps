import React from 'react';
import ExpenseFrom from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log('expenseData ->', expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
};

export default NewExpense;
