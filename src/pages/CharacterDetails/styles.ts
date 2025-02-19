import styled, { keyframes } from "styled-components";

const glitchRGB = keyframes`
  0% { text-shadow: 0px 0px 0px rgba(255, 51, 0, 0.5), 0px 0px 0px rgba(89, 0, 255, 0.5); }
  20% { text-shadow: -1px 1px rgba(255, 51, 0, 0.5), 1px -1px rgba(89, 0, 255, 0.5); filter: blur(1px); transform: translateX(-1px) rotate(-45deg); }
  40% { text-shadow: 1px -1px rgba(255, 51, 0, 0.5), -1px 1px rgba(89, 0, 255, 0.5); filter: blur(0); transform: translateX(1px) rotate(-45deg); }
  60% { text-shadow: -1px -1px rgba(255, 51, 0, 0.5), 1px 1px rgba(89, 0, 255, 0.5);  filter: blur(0); transform: translateX(-1px) rotate(-45deg); }
  80% { text-shadow: 1px 1px rgba(255, 51, 0, 0.5), -1px -1px rgba(89, 0, 255, 0.5);  filter: blur(1px); transform: translateX(1px) rotate(-45deg); }
  100% { text-shadow: 0px 0px 0px rgba(255, 51, 0, 0.5), 0px 0px 0px rgba(89, 0, 255, 0.5); transform: translateX(0) rotate(-45deg); }
`;

export const StyledCharacterDetails = styled.div`
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.radius.large};
  padding: ${({ theme }) => theme.spacing.large};
  max-width: 900px;
  margin: ${({ theme }) => theme.spacing.large} auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);

  text-align: left;
  h2 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.textHighlight};
    font-size: ${({ theme }) => theme.textSizes.large};
    margin-top: ${({ theme }) => theme.spacing.medium};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

export const StyledPicture = styled.div`
  width: 165px;
  height: 165px;
  background: ${({ theme }) => theme.colors.textSecondary};
  border-radius: ${({ theme }) => theme.radius.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  p {
    transform: rotate(-45deg);
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.textSizes.medium};
    opacity: 0.5;
    animation: ${glitchRGB} 0.3s infinite ease-in-out;
  }
`;

export const StyledHeadline = styled.div`
  display: flex;
  
  div {
    margin-left: ${({ theme }) => theme.spacing.large};
  }

  ${StyledPicture} {
    margin-left: 0;
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.textHighlight};
    font-size: ${({ theme }) => theme.textSizes.xlarge};
    margin-top: -11px;
  }
`;

export const StyledInfoContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.small};
`;

export const StyledInfo = styled.li`
  h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.textSizes.normal};
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  p {
    font-size: ${({ theme }) => theme.textSizes.normal};
    color: ${({ theme }) => theme.colors.textPrimary};
    text-transform: capitalize;
  }
`;

export const StyledVehicles = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: ${({ theme }) => theme.spacing.small};
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSecondary};

  h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.textSizes.normal};
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.textSizes.normal};
    margin-top: ${({ theme }) => theme.spacing.small};
  }

  p {
    font-size: ${({ theme }) => theme.textSizes.small};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const StyledVehicle = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const StyledFeaturedMovies = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const StyledFeaturedMovie = styled.li`
  cursor: pointer;

  > p {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.textSizes.normal};
    transition: all ease-in-out 0.2s;
  }

  &:hover {
    > p {
      color: ${({ theme }) => theme.colors.glowGreen};
      text-shadow: 0 0 5px ${({ theme }) => theme.colors.glowGreen},
        0 0 10px ${({ theme }) => theme.colors.greenDark},
        0 0 15px ${({ theme }) => theme.colors.greenDarker};
    }
  }
`;

export const StyledLoaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;
