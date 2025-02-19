import { theme } from "./../../../styles/theme";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const changeColor = keyframes`
  0% { border-top-color: ${theme.colors.glowBlue}; }
  33% { border-top-color: ${theme.colors.glowGreen}; }
  66% { border-top-color: ${theme.colors.glowRed}; }
  100% { border-top-color: ${theme.colors.glowBlue}; }
`;

export const StyledLoader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top: 4px solid ${theme.colors.glowBlue};
  animation: ${rotate} 0.8s linear infinite, ${changeColor} 2s linear infinite;
`;
