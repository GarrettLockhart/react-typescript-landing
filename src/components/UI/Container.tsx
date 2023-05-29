import { ReactNode } from 'react';
import { ContainerStyled } from '../styles/Header.style';

const Container = (props: { children: ReactNode }) => {
  return <ContainerStyled>{props.children}</ContainerStyled>;
};

export default Container;
