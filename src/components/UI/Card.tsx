import { ReactNode } from 'react';
import { CardStyled } from '../styles/Card.style';

const Card = (props: { children: ReactNode }) => {
  return <CardStyled>{props.children}</CardStyled>;
};

export default Card;
