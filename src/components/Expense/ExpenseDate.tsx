import dateHelper from '../assets/dateHelper';

type Props = {
  id: number;
  title: string;
  price: string;
  date: Date;
};

const ExpenseDate = (props: Props) => {
  return <div>{dateHelper(props.date)}</div>;
};

export default ExpenseDate;
