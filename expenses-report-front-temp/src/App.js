import ExpensesList from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const AddNewExpenseHandler = () => {};

  return (
    <div>
      <NewExpense onSubmitNewExpense={AddNewExpenseHandler} />
      <ExpensesList />
    </div>
  );
}

export default App;
