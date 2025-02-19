import styled, { css } from "styled-components";

export const StyledInputWrapper = styled.div<{ $action?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  position: relative;
  align-items: flex-start;
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.textSizes.normal};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 1px;
`;

export const StyledInput = styled.input<{ $error: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.normal};
  font-size: ${({ theme }) => theme.textSizes.normal};
  border: 2px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.radius.normal};
  outline: none;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(5px);

  ${({ $error, theme }) =>
    $error &&
    css`
      border-color: ${theme.colors.secondary};
      box-shadow: 0 0 5px ${theme.colors.secondary};
    `}

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary},
      0 0 20px ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const StyledInputError = styled.span`
  font-size: ${({ theme }) => theme.textSizes.small};
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.secondaryDark};
  margin-top: ${({ theme }) => theme.spacing.small};
`;

export const StyledInputAction = styled.button<{
  $position: "end" | "start";
  $error: boolean;
}>`
  position: absolute;
  bottom: ${({ $error }) => ($error ? "5px" : "-25px")};
  height: 52px;
  display: flex;
  align-items: center;
  ${({ $position }) => ($position === "end" ? "right: 12px;" : "left: 12px;")}
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0 0 5px ${({ theme }) => theme.colors.primary},
      0 0 10px ${({ theme }) => theme.colors.primaryDark};
  }
`;
