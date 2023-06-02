import { ReactNode } from 'react';

const Card = (props: { children: ReactNode }) => {
  return <div>{props.children}</div>;
};

export default Card;
