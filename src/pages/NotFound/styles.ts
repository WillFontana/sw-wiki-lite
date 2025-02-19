import styled, { DefaultTheme } from "styled-components";

export type ITypes = "page" | "empty" | "error";

const handleTypeColor = (type: ITypes, theme: DefaultTheme) => {
  const { glowGreen, glowRed, primary } = theme.colors;
  switch (type) {
    case "empty":
      return glowGreen;
    case "error":
      return glowRed;
    default:
      return primary;
  }
};

export const StyledNoContent = styled.div<{ $type: ITypes }>`
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: ${({ $type }) => ($type === "page" ? "250px" : "100px")};

  img {
    height: 250px;
  }

  h2 {
    text-align: center;
    font-size: ${({ theme }) => theme.textSizes.large};
    color: ${({ $type, theme }) => handleTypeColor($type, theme)};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
`;
