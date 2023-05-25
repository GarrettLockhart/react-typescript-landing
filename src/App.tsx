import ExpenseItem from './components/Expense/ExpenseItem';
import { expenseData } from './components/assets/expenseData';
function App() {
  return (
    <>
      {expenseData.map((item) => {
        return (
          <ExpenseItem
            id={item.id}
            title={item.title}
            price={item.price}
            date={item.date}
          ></ExpenseItem>
        );
      })}
    </>
  );
}

export default App;
