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
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 28px;
  max-width: 900px;
  margin: 40px auto 40px;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.2);
  h2 {
    font-family: "Audiowide", sans-serif;
    color: #ffe81f;
    font-size: 22px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const StyledPicture = styled.div`
  width: 165px;
  height: 165px;
  background: #888;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  p {
    transform: rotate(-45deg);
    color: red;
    font-size: 24px;
    opacity: 0.5;
    animation: ${glitchRGB} 0.3s infinite ease-in-out;
  }
`;

export const StyledHeadline = styled.div`
  display: flex;
  div {
    margin-left: 40px;
  }
  ${StyledPicture} {
    margin-left: 0px;
  }
  h2 {
    font-family: "Audiowide", sans-serif;
    color: #ffe81f;
    font-size: 32px;
    margin-top: -11px;
  }
`;

export const StyledInfoContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 10px;
`;

export const StyledInfo = styled.li`
  h3 {
    font-family: "Audiowide", sans-serif;
    font-size: 16px;
    color: #afafaf;
  }
  p {
    font-size: 16px;
    color: #fafafa;
    text-transform: capitalize;
  }
`;

export const StyledVehicles = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 10px;
  border-bottom: 1px solid #afafaf;
  div + div {
  }
  h3 {
    font-family: "Audiowide", sans-serif;
    color: #afafaf;
    font-size: 18px;
  }
  h4 {
    font-family: "Audiowide", sans-serif;
    color: #afafaf;
    font-size: 16px;
    margin-top: 5px;
  }
  p {
    font-size: 14px;
    color: #fff;
  }
`;

export const StyledVehicle = styled.li`
  margin-bottom: 20px;
`;

export const StyledFeaturedMovies = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const StyledFeaturedMovie = styled.li`
  cursor: pointer;

  > p {
    color: #fff;
    font-size: 16px;
    transition: all ease-in-out 0.2s;
  }

  &:hover {
    > p {
      color: #00ff00;
      text-shadow: 0 0 5px #00ff00, 0 0 10px #00cc00, 0 0 15px #008800;
    }
  }
`;

export const StyledLoaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 20px 0;
`;
