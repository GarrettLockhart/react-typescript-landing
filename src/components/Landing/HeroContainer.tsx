import styled from 'styled-components';
import Container from '../UI/Container';
import HeroNewsCard from './HeroNewsCard';
import HeroImageCard from './HeroImageCard';

const Wrapper = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 50vh;
  gap: 20px;
`;

const HeroContainer = () => {
  return (
    <Wrapper>
      <StyledContainer as='main'>
        <HeroImageCard />
        <HeroNewsCard />
      </StyledContainer>
    </Wrapper>
  );
};

export default HeroContainer;
