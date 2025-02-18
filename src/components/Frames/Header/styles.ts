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
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
  padding: 40px 0;
  overflow: hidden;
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
    margin-bottom: 10px;
    transition: transform 0.2s ease-in-out;
  }

  p {
    font-size: 21px;
    font-family: "Audiowide", sans-serif;
    color: #fff;
    text-shadow: 0 0 5px
      ${({ $side }) => ($side === "light" ? "#00aaff" : "#ff4444")};
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    p {
      text-shadow: 0 0 10px
          ${({ $side }) => ($side === "light" ? "#00aaff" : "#ff4444")},
        0 0 15px ${({ $side }) => ($side === "light" ? "#0088cc" : "#cc2222")};
    }
  }

  ${({ $active, $side }) =>
    $active &&
    css`
      img {
        transform: scale(1.2) !important;
      }
      p {
        color: ${$side === "light" ? "#00aaff" : "#ff4444"};
        text-shadow: 0 0 10px ${$side === "light" ? "#00aaff" : "#ff4444"},
          0 0 20px ${$side === "light" ? "#00aaff" : "#ff4444"},
          0 0 30px ${$side === "light" ? "#0088cc" : "#cc2222"},
          0 0 40px ${$side === "light" ? "#0077bb" : "#aa1111"} !important;
      }
    `}
`;

export const StyledReturn = styled.button<{ $animation?: "intro" | "leaving" }>`
  background-color: transparent;
  width: ${({ $animation }) => ($animation ? "100px" : "0px")};
  overflow: visible;
  transition: all ease-in-out 0.2s;
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
