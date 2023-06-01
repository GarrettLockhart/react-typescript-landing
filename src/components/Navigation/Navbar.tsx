import Container from '../UI/Container';
import ListItem from '../UI/ListItem';
import styled from 'styled-components';

enum VARIANT {
  PRIMARY,
  SECONDARY
}
interface IProps {
  variant?: VARIANT;
}

const UlStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1Styled = styled.h1<IProps>`
  font-size: 3rem;
  font-family: 'Times New Roman', Times, serif;
  color: ${(props) => props.theme.palette.primary.main};
`;

const LinkStyled = styled.a`
  color: black;
  text-decoration: none;
  font-size: 14px;
`;

const Navbar = () => {
  return (
    <Container>
      <div>
        <H1Styled>W.</H1Styled>
      </div>
      <div>
        <UlStyled>
          <LinkStyled href='/home'>
            <ListItem>Home</ListItem>
          </LinkStyled>
          <LinkStyled href='#'>
            <ListItem>New</ListItem>
          </LinkStyled>
          <LinkStyled href='#'>
            <ListItem>Popular</ListItem>
          </LinkStyled>
          <LinkStyled href='#'>
            <ListItem>Trending</ListItem>
          </LinkStyled>
          <LinkStyled href='#'>
            <ListItem>Categories</ListItem>
          </LinkStyled>
        </UlStyled>
      </div>
    </Container>
  );
};

export default Navbar;
