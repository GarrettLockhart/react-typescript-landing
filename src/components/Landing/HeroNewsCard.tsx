import styled from 'styled-components';
import Card from '../UI/Card';
import HeroNewsItems from './HeroNewsItems';

const StyledNewsCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  height: 100%;
`;

const HeroNewsCard = () => {
  return (
    <StyledNewsCard as='section'>
      <div>News</div>
      <HeroNewsItems />
    </StyledNewsCard>
  );
};

export default HeroNewsCard;
