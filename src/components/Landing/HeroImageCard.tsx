import styled from 'styled-components';

import Card from '../UI/Card';
import HeroImageReadMore from './HeroImageReadMore';
import HeroImage from '../assets/images/image-web-3-desktop.jpg';


const StyledImageCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  overflow: hidden;
`;

const StyledInfoCardWrapper = styled.section`
  display: flex;
  height: 50%;
  width: 100%;
  padding: 30px 0px;
`;

const StyledHeaderCard = styled.section`
  width: 50%;
  padding: 0 10px;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 3rem;
  font-weight: bold;
`;

const HeroImageCard = () => {
  return (
    <StyledImageCard as='section'>
      <StyledImage src={HeroImage} alt='Hero Image' />
      <StyledInfoCardWrapper>
        <StyledHeaderCard>The Bright Future of Web 3.0?</StyledHeaderCard>
        <HeroImageReadMore />
      </StyledInfoCardWrapper>
    </StyledImageCard>
  );
};

export default HeroImageCard;
