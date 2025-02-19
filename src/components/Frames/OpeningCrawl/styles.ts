import styled, { keyframes } from "styled-components";

const crawlAnimation = keyframes`
  from {
    transform: perspective(500px) rotateX(20deg) translateY(100%);
    opacity: 1;
  }
  to {
    transform: perspective(500px) rotateX(25deg) translateY(-300%);
    opacity: 0;
  }
`;

export const StyledCrawlContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCrawl = styled.div`
  width: 50%;
  font-size: ${({ theme }) => theme.textSizes.medium};
  text-align: justify;
  color: ${({ theme }) => theme.colors.textHighlight};
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1.8;
  text-shadow: 0 0 5px ${({ theme }) => theme.colors.textHighlight};

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${crawlAnimation} 25s linear forwards;

  h1 {
    font-size: ${({ theme }) => theme.textSizes.large};
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  h2 {
    font-size: ${({ theme }) => theme.textSizes.medium};
    font-weight: bold;
    text-transform: uppercase;
  }
`;
