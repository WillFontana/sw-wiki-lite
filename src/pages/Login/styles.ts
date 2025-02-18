import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(circle, #0d0d0d, #111111);
`;

export const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.05); 
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

export const LoginTitle = styled.h2`
  font-size: 24px;
  color: #ffe81f;
  font-family: "Audiowide", sans-serif;
  text-transform: uppercase;
`;
