import { ReactNode } from 'react';

const Container = (props: { children: ReactNode }) => {
  return <div>{props.children}</div>;
};

export default Container;
