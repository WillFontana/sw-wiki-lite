import styled, { keyframes } from "styled-components";
import { StyledInputWrapper } from "../../components/Form/Input/styles";
import { StyledButton } from "../../components/Buttons/Button/styles";

const renderAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(.6);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const StyledRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.backgroundDark},
    ${({ theme }) => theme.colors.backgroundLight}
  );
  color: ${({ theme }) => theme.colors.textPrimary};

  h2 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.textHighlight};
    font-size: ${({ theme }) => theme.textSizes.large};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }
`;

export const StyledRegisterForm = styled.form`
  animation: ${renderAnimation} 0.8s ease-out forwards;
  background: rgba(255, 255, 255, 0.05);
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.radius.large};
  backdrop-filter: blur(10px);
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.1);

  ${StyledInputWrapper} {
    margin-top: ${({ theme }) => theme.spacing.medium};
  }

  ${StyledButton} {
    margin-top: ${({ theme }) => theme.spacing.large};
  }
`;

export const StyledRegisterButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.normal};
  font-size: ${({ theme }) => theme.textSizes.medium};
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.radius.medium};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryDark}
  );
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;
  box-shadow: 0px 4px 10px ${({ theme }) => theme.colors.glowBlue};
  transition: 0.3s;
  display: flex;
  justify-content: center;

  &:hover {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primaryDark},
      ${({ theme }) => theme.colors.primary}
    );
    box-shadow: 0px 0px 15px ${({ theme }) => theme.colors.glowBlue};
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;
