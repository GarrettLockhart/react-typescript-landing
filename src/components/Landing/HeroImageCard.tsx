import styled from 'styled-components';
import Card from '../UI/Card';
import HeroImage from '../assets/images/image-web-3-desktop.jpg';

const StyledImageCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const HeroImageCard = () => {
  return (
    <StyledImageCard as='section'>
      <StyledImage src={HeroImage} alt='Hero Image' />
    </StyledImageCard>
  );
};

export default HeroImageCard;
