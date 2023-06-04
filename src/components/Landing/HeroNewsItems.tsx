import styled from 'styled-components';

import Container from '../UI/Container';
import newsData from '../assets/news-data/news-data';

const StyledItemWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 25px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
`;

const StyledH4 = styled.h4`
  cursor: pointer;
  color: white;
  font-size: 1.15rem;

  &:hover {
    color: ${({ theme }) => theme.palette.active.active100};
  }
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.palette.primary.altText200};
`;

const HeroNewsItems = () => {
  return (
    <StyledWrapper>
      {newsData.map((item) => {
        return (
          <StyledItemWrapper as='div' key={item.id}>
            <StyledH4>{item.title}</StyledH4>
            <StyledParagraph>{item.content}</StyledParagraph>
          </StyledItemWrapper>
        );
      })}
    </StyledWrapper>
  );
};

export default HeroNewsItems;
