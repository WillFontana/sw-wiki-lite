import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.textSizes.medium};
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.normal};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryDark}
  );
  color: ${({ theme }) => theme.colors.textPrimary};
  text-transform: uppercase;
  box-shadow: 0px 4px 8px ${({ theme }) => theme.colors.primaryLight};
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primaryDark},
      ${({ theme }) => theme.colors.primary}
    );
    box-shadow: 0px 4px 10px ${({ theme }) => theme.colors.primaryLight};
  }

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;
