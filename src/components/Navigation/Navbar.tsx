import styled from 'styled-components';

import Container from '../UI/Container';
import ListItem from '../UI/ListItem';

const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
`;

const UlStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1Styled = styled.h1`
  font-size: 3rem;
  font-family: 'Times New Roman', Times, serif;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const LinkStyled = styled.a`
  color: ${({ theme }) => theme.palette.primary.altText100};
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: ${({ theme }) => theme.palette.active.active200};
  }
`;

const Navbar = () => {
  return (
    <ContainerStyled as='div'>
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
    </ContainerStyled>
  );
};

export default Navbar;
