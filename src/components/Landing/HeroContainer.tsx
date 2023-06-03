import styled from 'styled-components';
import Container from '../UI/Container';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const HeroContainer = () => {
  return (
    <StyledContainer as='div'>
      <div>Hello</div>
      <div>Hello</div>
    </StyledContainer>
  );
};

export default HeroContainer;
