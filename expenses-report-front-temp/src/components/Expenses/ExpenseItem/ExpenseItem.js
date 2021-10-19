import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../Card/Card";

function ExpenseItem(props) {
  const [name, setName] = useState(props.expenseItem.name);
  const [date, setDate] = useState(props.expenseItem.date);
  const [amount, setAmount] = useState(props.expenseItem.amount);

  function changeNameHandler() {
    setName("changed");
  }

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={date} />
        <h2>{name}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={changeNameHandler}>Change Name</button>
    </Card>
  );
}

export default ExpenseItem;
