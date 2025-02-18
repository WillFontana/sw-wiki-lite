import styled from "styled-components";

export type ITypes = "page" | "empty" | "error";

const handleTypeColor = (type: ITypes) => {
  switch (type) {
    case "empty":
      return "#00ff00";
    case "error":
      return "#ff4444";
    default:
      return "#00aaff";
  }
};

export const StyledNoContent = styled.div<{
  $type: ITypes;
}>`
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: ${({$type}) => $type === "page" ? "250px" : "100px"};
  img {
    height: 250px;
  }
  h2 {
    font-size: 32px;
    color: ${({ $type }) => handleTypeColor($type)};
    font-family: "Audiowide", sans-serif;
  }
`;
