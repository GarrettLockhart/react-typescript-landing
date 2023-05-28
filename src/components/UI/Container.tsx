import { ReactNode } from 'react';
import { ContainerStyled } from '../styles/Container.style';

const Container = (props: { children: ReactNode }) => {
  return <ContainerStyled>{props.children}</ContainerStyled>;
};

export default Container;
