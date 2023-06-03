import styled from 'styled-components';
import Card from '../UI/Card';

const StyledNewsCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const HeroNewsCard = () => {
  return <StyledNewsCard as='section'>Hello</StyledNewsCard>;
};

export default HeroNewsCard;
