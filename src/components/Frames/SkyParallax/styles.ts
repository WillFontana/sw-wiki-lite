import styled from "styled-components";

export const StyledSkyParallax = styled.div<{ $bgImage: string }>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 0;
  background-position: center;
  background-repeat: repeat;
  filter: grayscale(1);
  background-image: ${({ $bgImage }) => $bgImage};
`;
