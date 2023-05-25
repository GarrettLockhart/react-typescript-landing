import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

type ExpenseItemPropTypes = {
  id: number;
  title: string;
  price: string;
  date: Date;
};

const ExpenseItem = (props: ExpenseItemPropTypes) => {
  return (
    <Card>
      <ExpenseDate
        id={props.id}
        title={props.title}
        price={props.price}
        date={props.date}
      ></ExpenseDate>
      <div>
        <h2 key={props.id}>{props.title}</h2>
        <p>{props.price}</p>
      </div>
    </Card>
  );
};

export default ExpenseItem;
