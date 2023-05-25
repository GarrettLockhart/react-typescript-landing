import ExpenseItem from './components/Expenses/ExpenseItem';
import { expenseData } from '../src/components/assets/expenseItemData';
function App() {
  return (
    <>
      {expenseData.map((item: any) => {
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
