import styled from 'styled-components';
import Container from '../UI/Container';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 100%;
  padding: 0 10px;
`;

const StyledInfoCard = styled.section`
  width: 50%;
`;

const StyledButton = styled.button`
  margin-top: auto;
  border: none;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  width: 50%;
  padding: 15px 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    font-weight: bold;
  }
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.palette.primary.altText100};
`;

const HeroImageReadMore = () => {
  return (
    <StyledInfoCard>
      <StyledContainer as='section'>
        <StyledParagraph>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </StyledParagraph>
        <StyledButton>READ MORE</StyledButton>
      </StyledContainer>
    </StyledInfoCard>
  );
};

export default HeroImageReadMore;
