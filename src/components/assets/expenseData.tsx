interface expenseObjTypes {
  id: number;
  title: string;
  price: string;
  date: Date;
}

export const expenseData: expenseObjTypes[] = [
  {
    id: 1,
    title: 'Expense Item 1',
    price: `$${264.48}`,
    date: new Date()
  },
  {
    id: 2,
    title: 'Expense Item 2',
    price: `$${238.56}`,
    date: new Date()
  },
  {
    id: 3,
    title: 'Expense Item 3',
    price: `$${976.45}`,
    date: new Date()
  },
  {
    id: 4,
    title: 'Expense Item 4',
    price: `$${32.56}`,
    date: new Date()
  }
];
