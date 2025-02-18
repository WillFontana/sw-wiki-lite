import styled, { keyframes } from "styled-components";

const riseAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
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
  padding: 180px 0 20px;
  background-color: #000000cc;
  transition: all ease-in-out 0.2s;
  opacity: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-family: "Star Wars", sans-serif;
    color: #ffe81f;
    span {
      font-family: "Audiowide", sans-serif;
    }
  }
  p {
    color: #00aaff;
    margin-top: auto;
    font-family: "Audiowide", sans-serif;
  }
`;

export const StyledMovieCard = styled.a<{$delay: number}>`
  cursor: pointer;
  position: relative;
  width: 350px;
  height: 530px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 0px 5px #0077bb44;
  transition: all ease-in-out 0.2s;
  opacity: 0;
  animation: ${riseAnimation} 0.8s ease-out forwards;
  animation-delay: ${({ $delay }) => `${$delay * 0.2}s`};

  &:hover {
    transform: scale(1.1);
    ${StyledMovieOverlay} {
      opacity: 1;
    }
  }
`;
