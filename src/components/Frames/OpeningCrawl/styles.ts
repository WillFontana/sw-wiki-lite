import styled, { keyframes } from "styled-components";

const crawlAnimation = keyframes`
  from {
    transform: perspective(300px) rotateX(20deg) translateY(100%);
  }
  to {
    transform: perspective(300px) rotateX(25deg) translateY(-300%);
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
  font-size: 20px;
  text-align: justify;
  color: yellow;
  font-family: "Audiowide", sans-serif;
  line-height: 1.8;
  text-shadow: 0 0 5px yellow;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${crawlAnimation} 25s linear forwards;

  h1 {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
