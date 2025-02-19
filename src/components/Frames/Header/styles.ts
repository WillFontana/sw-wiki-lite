import styled, { css, keyframes } from "styled-components";

const introAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  45% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 🔥 Animação de saída do botão
const leavingAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.spacing.large} 0;
  overflow: hidden;
  position: relative;
`;

export const StyledNav = styled.nav`
  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const StyledNavItem = styled.li<{
  $active: boolean;
  $side: "dark" | "light";
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  cursor: pointer;

  > * {
    transition: all ease-in-out 0.2s;
  }

  img {
    width: 60px;
    margin-bottom: ${({ theme }) => theme.spacing.small};
    transition: transform 0.2s ease-in-out;
  }

  p {
    font-size: ${({ theme }) => theme.textSizes.medium};
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.textPrimary};
    text-shadow: 0 0 5px
      ${({ theme, $side }) =>
        $side === "light" ? theme.colors.glowBlue : theme.colors.glowRed};
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    p {
      text-shadow: 0 0 10px
          ${({ theme, $side }) =>
            $side === "light" ? theme.colors.glowBlue : theme.colors.glowRed},
        0 0 15px
          ${({ theme, $side }) =>
            $side === "light" ? theme.colors.primary : theme.colors.secondary};
    }
  }

  ${({ $active, $side, theme }) =>
    $active &&
    css`
      img {
        transform: scale(1.2) !important;
      }
      p {
        color: ${$side === "light"
          ? theme.colors.glowBlue
          : theme.colors.glowRed};
        text-shadow: 0 0 10px
            ${$side === "light" ? theme.colors.glowBlue : theme.colors.glowRed},
          0 0 20px
            ${$side === "light" ? theme.colors.glowBlue : theme.colors.glowRed},
          0 0 30px
            ${$side === "light"
              ? theme.colors.primaryDark
              : theme.colors.secondaryDark},
          0 0 40px
            ${$side === "light" ? theme.colors.primary : theme.colors.secondary} !important;
      }
    `}
`;

export const StyledReturn = styled.button<{ $animation?: "intro" | "leaving" }>`
  background-color: transparent;
  width: ${({ $animation }) => ($animation ? "100px" : "0px")};
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    min-width: 60px;
    max-width: 60px;
    opacity: 0;
    transform: translateY(100%);

    ${({ $animation }) =>
      $animation === "intro"
        ? css`
            animation: ${introAnimation} 0.5s ease-in-out forwards;
          `
        : $animation === "leaving"
        ? css`
            animation: ${leavingAnimation} 0.2s ease-in-out forwards;
          `
        : ""}
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

export const StyledLogoutButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: transparent;
  position: absolute;
  right: 0px;
  top: 60px;
`;
