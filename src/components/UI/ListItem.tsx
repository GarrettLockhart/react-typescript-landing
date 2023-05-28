import { ReactNode } from 'react';
import { ListItemStyled } from '../styles/ListItem.style';

const ListItem = (props: { children: ReactNode }) => {
  return <ListItemStyled>{props.children}</ListItemStyled>;
};

export default ListItem;
