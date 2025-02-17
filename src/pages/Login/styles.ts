import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(circle, #0d0d0d, #111111); /* Fundo Star Wars */
`;

export const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.05); /* Efeito vidro fosco */
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px); /* Deixa um efeito glass */
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

export const LoginTitle = styled.h2`
  font-size: 24px;
  color: #fff;
  font-family: "Orbitron", sans-serif;
  text-transform: uppercase;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 6px;
  background: linear-gradient(90deg, #00aaff, #0066ff);
  color: white;
  text-transform: uppercase;
  box-shadow: 0px 4px 10px rgba(0, 170, 255, 0.5);
  transition: 0.3s;

  &:hover {
    background: linear-gradient(90deg, #0066ff, #00aaff);
    box-shadow: 0px 0px 15px rgba(0, 170, 255, 0.8);
  }
`;

export const BackgroundStars = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("https://tenor.com/view/light-speed-gif-18434037") repeat center;
  opacity: 0.2;
  animation: moveStars 60s linear infinite;

  @keyframes moveStars {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 1000px 1000px;
    }
  }
`;
