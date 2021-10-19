import { useState } from "react";

import "./NewExpenseForm.css";

function NewExpenseForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitNewExpenseHandler = (event) => {
    //the default behavior is reaload the page when submitting a form and we don't want that, so we use this function.
    event.preventDefault();

    const newExpenseData = {
      name: enteredName,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSubmitNewExpense(newExpenseData);
    setEnteredName("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitNewExpenseHandler}>
      <div className="new-expense-form__controls">
        <div className="new-expense-form__control"> 
          <label>Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="new-expense-form__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense-form__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense-form__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
