import Container from '../UI/Container';
import ListItem from '../UI/ListItem';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const Navbar = () => {
  const UlStyled = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const H1Styled = styled.h1`
    font-size: 3rem;
  `;

  return (
    <Container>
      <div>
        <H1Styled>W.</H1Styled>
      </div>
      <div>
        <UlStyled>
          <a href=''>
            <ListItem>Home</ListItem>
          </a>
          <a href=''>
            <ListItem>New</ListItem>
          </a>
          <a href=''>
            <ListItem>Popular</ListItem>
          </a>
          <a href=''>
            <ListItem>Trending</ListItem>
          </a>
          <a href=''>
            <ListItem>Categories</ListItem>
          </a>
        </UlStyled>
      </div>
    </Container>
  );
};

export default Navbar;
