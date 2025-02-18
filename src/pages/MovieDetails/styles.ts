import styled, { keyframes } from "styled-components";

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
    transform: translateX(-120px);
  }
  50% {
    opacity: 0;
    transform: translateX(-60px);
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
  padding-bottom: 40px;
`;

export const StyledMovieInfoContainer = styled.div`
  position: relative;
  height: 560px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  > div {
    margin-left: 40px;
    > h1 {
      font-size: 40px;
      font-family: "Audiowide", sans-serif;
      color: #ffe81f;
      opacity: 0;
      transform: translateX(-120px);
      animation: ${textAnimation} 1s ease-in-out forwards;
      animation-delay: 1.2s;
      margin-bottom: 15px;
    }
    > h4 {
      color: #ffffff;
      font-size: 20px;
      opacity: 0;
      transform: translateX(-120px);
      animation: ${textAnimation} 1s ease-in-out forwards;
      animation-delay: 1.4s;
      margin-bottom: 10px;
    }
    > p {
      color: #ffffff;
      font-size: 16px;
      margin-top: 20px;
      opacity: 0;
      transform: translateX(-120px);
      animation: ${textAnimation} 1s ease-in-out forwards;
      animation-delay: 1.4s;
    }
  }
`;

export const StyledMovieBanner = styled.div`
  min-width: 350px;
  height: 550px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 16px;
  animation: ${bannerAnimation} 1s ease-in-out forwards;
  box-shadow: 0px 0px 5px #0077bb44;
`;

export const StyledCharacterContainer = styled.div`
  > h2 {
    color: #ffffff;
    font-size: 26px;
    font-family: "Audiowide", sans-serif;
    margin-top: 20px;
    margin-left: 40px;
  }
`;

export const StyledLoaderContaier = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 20px 0;
`;

export const StyledCharactersList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-content: center;
  margin: 20px 40px 0;
  animation: ${listAnimation} 1s ease-in-out forwards;
`;
