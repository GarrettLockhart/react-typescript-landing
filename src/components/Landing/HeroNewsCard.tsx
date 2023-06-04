import styled from 'styled-components';

import Card from '../UI/Card';
import HeroNewsItems from './HeroNewsItems';

const StyledNewsCard = styled(Card)`
  display: flex;
  flex-direction: column;
  /* justify-content: start; */
  /* align-items: center; */
  width: 35%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  overflow: scroll;
`;

const StyledHeader = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 2.75rem;
  font-weight: bold;
  height: 20%;
  color: ${({ theme }) => theme.palette.active.active100};
  padding-left: 20px;
`;

const HeroNewsCard = () => {
  return (
    <StyledNewsCard as='section'>
      <StyledHeader>New</StyledHeader>
      <HeroNewsItems />
    </StyledNewsCard>
  );
};

export default HeroNewsCard;
