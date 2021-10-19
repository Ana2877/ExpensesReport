import "./Expenses.css";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

function ExpensesList(props) {
  const expenses = [
    { id: "e1", name: "Car", amount: 284, date: new Date(2021, 5, 12) },
    { id: "e2", name: "Books", amount: 87.23, date: new Date(2021, 4, 14) },
    { id: "e3", name: "Gym", amount: 439.08, date: new Date(2021, 6, 15) },
    { id: "e4", name: "Food", amount: 537.9, date: new Date(2021, 7, 22) },
  ];

  const onChangeYearFilterHandler = (year) => {
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeYearFilter={onChangeYearFilterHandler} />
      <ExpenseItem expenseItem={expenses[0]} />
      <ExpenseItem expenseItem={expenses[1]} />
      <ExpenseItem expenseItem={expenses[2]} />
      <ExpenseItem expenseItem={expenses[3]} />
    </Card>
  );
}

export default ExpensesList;
