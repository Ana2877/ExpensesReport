import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm/NewExpenseForm";

function NewExpense(props) {
  const onSubmitNewExpenseHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    }
    props.onSubmitNewExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <NewExpenseForm onSubmitNewExpense={onSubmitNewExpenseHandler} />
    </div>
  );
}

export default NewExpense;
