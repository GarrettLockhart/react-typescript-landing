type Props = {
  id: number;
  title: string;
  price: string;
  date: Date;
};

const ExpenseDate = (props: Props) => {
  return <div>{props.date}</div>;
};

export default ExpenseDate;
