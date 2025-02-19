import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: ${({ theme }) => theme.radius.small};
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, ${({ theme }) =>
      theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
    border-radius: ${({ theme }) => theme.radius.small};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}, 0 0 20px ${({
  theme,
}) => theme.colors.primaryDark};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, ${({ theme }) =>
      theme.colors.primaryLight}, ${({ theme }) => theme.colors.primaryDark});
    box-shadow: 0 0 15px ${({ theme }) =>
      theme.colors.primaryLight}, 0 0 30px ${({ theme }) =>
  theme.colors.primaryDark};
  }

  body.dark-theme ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, ${({ theme }) =>
      theme.colors.secondary}, ${({ theme }) => theme.colors.secondaryDark});
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.secondary}, 0 0 20px ${({
  theme,
}) => theme.colors.secondaryDark};
  }

  body.dark-theme ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, ${({ theme }) =>
      theme.colors.secondaryLight}, ${({ theme }) =>
  theme.colors.secondaryDark});
    box-shadow: 0 0 15px ${({ theme }) =>
      theme.colors.secondaryLight}, 0 0 30px ${({ theme }) =>
  theme.colors.secondaryDark};
  }
`;
