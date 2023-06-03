import styled from 'styled-components';
import Container from '../UI/Container';
import HeroNewsCard from './HeroNewsCard';
import HeroImageCard from './HeroImageCard';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50vh;
`;

const HeroContainer = () => {
  return (
    <Wrapper>
      <StyledContainer as='main'>
        <HeroImageCard></HeroImageCard>
        <HeroNewsCard></HeroNewsCard>
      </StyledContainer>
    </Wrapper>
  );
};

export default HeroContainer;
