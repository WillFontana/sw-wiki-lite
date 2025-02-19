import styled, { keyframes } from "styled-components";

const riseAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledMovieBanner = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StyledMovieOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.xlarge} 0
    ${({ theme }) => theme.spacing.normal};
  background-color: ${({ theme }) => theme.colors.overlay};
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.textHighlight};
    margin-top: ${({ theme }) => theme.spacing.xlarge};
    span {
      font-family: ${({ theme }) => theme.fonts.secondary};
    }
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
`;

export const StyledMovieCard = styled.a<{ $delay: number }>`
  cursor: pointer;
  position: relative;
  width: 350px;
  height: 530px;
  border-radius: ${({ theme }) => theme.radius.large};
  overflow: hidden;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.primaryDark}44;
  transition: transform 0.2s ease-in-out;
  opacity: 0;
  animation: ${riseAnimation} 0.8s ease-out forwards;
  animation-delay: ${({ $delay }) => `${Math.max($delay * 0.2, 0)}s`};

  &:hover {
    transform: scale(1.1);

    ${StyledMovieOverlay} {
      opacity: 1;
    }
  }
`;
