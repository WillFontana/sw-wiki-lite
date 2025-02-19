import styled, { DefaultTheme, keyframes } from "styled-components";

const saberGlow = (theme: DefaultTheme) => keyframes`
  0% { box-shadow: 0px 0px 8px ${theme.colors.glowBlue}; } 
  33% { box-shadow: 0px 0px 5px ${theme.colors.glowGreen}; }
  66% { box-shadow: 0px 0px 8px ${theme.colors.glowRed}; }
  100% { box-shadow: 0px 0px 5px ${theme.colors.glowBlue}; }
`;

const bannerAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-120px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const textAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const listAnimation = keyframes`
  from {
    max-height: 0px;
    opacity: 0;
  }
  to {
    max-height: 1000px;
    opacity: 1;
  }
`;

export const StyledMovieDetails = styled.section`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.large};
`;

export const StyledMovieInfoContainer = styled.div`
  position: relative;
  height: 560px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;

  > div {
    margin-left: ${({ theme }) => theme.spacing.medium};

    > h1 {
      font-size: ${({ theme }) => theme.textSizes.xlarge};
      font-family: ${({ theme }) => theme.fonts.secondary};
      color: ${({ theme }) => theme.colors.textHighlight};
      opacity: 0;
      transform: translateX(-120px);
      animation: ${textAnimation} 1s ease-in-out forwards;
      animation-delay: 0.6s;
      margin-bottom: ${({ theme }) => theme.spacing.small};
    }

    > h4 {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-size: ${({ theme }) => theme.textSizes.large};
      opacity: 0;
      transform: translateX(-120px);
      animation: ${textAnimation} 1s ease-in-out forwards;
      animation-delay: 0.8s;
      margin-bottom: ${({ theme }) => theme.spacing.small};
    }

    > p {
      color: ${({ theme }) => theme.colors.textPrimary};
      font-size: ${({ theme }) => theme.textSizes.normal};
      margin-top: ${({ theme }) => theme.spacing.small};
      opacity: 0;
      transform: translateX(-120px);
      animation: ${textAnimation} 1s ease-in-out forwards;
      animation-delay: 1.4s;
    }
  }
`;

export const StyledMovieBanner = styled.div`
  min-width: 350px;
  height: 530px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.radius.large};
  animation: ${bannerAnimation} 1s ease-in-out forwards;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.primaryDark}44;
`;

export const StyledCharacterContainer = styled.div`
  > h2 {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.textSizes.large};
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin-top: ${({ theme }) => theme.spacing.medium};
    margin-left: ${({ theme }) => theme.spacing.medium};
  }
`;

export const StyledLoaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.medium} 0;
`;

export const StyledCharactersList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.medium}
    ${({ theme }) => theme.spacing.large} 0;
  animation: ${listAnimation} 1s ease-in-out forwards;
`;

export const StyledSkipButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  font-size: ${({ theme }) => theme.textSizes.medium};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.medium};
  min-width: 200px;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.large} auto;

  &:hover {
    animation: ${({ theme }) => saberGlow(theme)} 1s linear infinite;
  }
`;
