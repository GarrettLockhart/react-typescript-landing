import styled from 'styled-components';
import Container from '../UI/Container';

const StyledContainer = styled(Container)`
  display: grid;
`;

const HeroContainer = () => {
  return (
    <StyledContainer>
      <div>Hello</div>
    </StyledContainer>
  );
};

export default HeroContainer;
