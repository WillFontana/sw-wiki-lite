import styled from "styled-components";
import { StyledButton } from "../../components/Buttons/Button/styles";
import { StyledInputWrapper } from "../../components/Form/Input/styles";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.backgroundDark},
    ${({ theme }) => theme.colors.backgroundLight}
  );
`;

export const LoginCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.radius.medium};
  box-shadow: 0px 0px 15px ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(10px);
  max-width: 400px;
  width: 100%;
  text-align: center;

  ${StyledButton} {
    margin-top: ${({ theme }) => theme.spacing.medium};
  }

  ${StyledInputWrapper} {
    margin-top: 20px;
  }
`;

export const LoginTitle = styled.h2`
  font-size: ${({ theme }) => theme.textSizes.large};
  color: ${({ theme }) => theme.colors.textHighlight};
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-transform: uppercase;
`;
