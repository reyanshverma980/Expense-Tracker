import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditinghandler = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onCancel={stopEditinghandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
