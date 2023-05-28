import Container from '../UI/Container';
import ListItem from '../UI/ListItem';
import styled from 'styled-components';

const UlStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Container>
      <div>
        <h1>Hello</h1>
        <img src='' alt='' />
      </div>
      <div>
        <UlStyled>
          <ListItem>List 1</ListItem>
          <ListItem>List 2</ListItem>
          <ListItem>List 3</ListItem>
        </UlStyled>
      </div>
    </Container>
  );
};

export default Navbar;
