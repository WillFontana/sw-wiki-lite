import styled, { keyframes } from "styled-components";

const igniteSaber = ($side: "left" | "right") => keyframes`
  0% {
    opacity: 0;
    height: 0px;
    ${$side === "left" ? "left: 120px;" : "right: 125px;"}
  }
  50% {
    opacity: 1;
    height: 400px;
    ${$side === "left" ? "left: 203px;" : "right: 227px;"}
  }
  100% {
    opacity: 0;
    height: 0px;
    ${$side === "left" ? "left: 120px;" : "right: 125px;"}
  }
`;

const saberConfig = {
  left: { color: "#0077bb", rotation: "-31deg", align: "start" },
  right: { color: "#cc2222", rotation: "277deg", align: "end" },
};

export const StyledLoader = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 90px;
`;

export const StyledLightSaber = styled.div<{ $side: "left" | "right" }>`
  width: 200px;
  height: 600px;
  display: flex;
  justify-content: ${({ $side }) => saberConfig[$side].align};
  align-items: end;
  position: relative;

  &::before {
    content: "";
    border-radius: 6px;
    width: 10px;
    height: 400px;
    background-color: #fff;
    position: absolute;
    bottom: 132px;
    ${({ $side }) => ($side === "left" ? "left: 203px;" : "right: 227px;")}
    transform: ${({ $side }) =>
      $side === "left" ? "rotate(23deg)" : "rotate(-27deg)"};
    box-shadow: 0 0 20px ${($props) => saberConfig[$props.$side].color},
      0 0 40px ${($props) => saberConfig[$props.$side].color};
    animation: ${({ $side }) => igniteSaber($side)} 3s ease-in-out infinite;
  }

  img {
    width: 200px;
    transform: rotate(${({ $side }) => saberConfig[$side].rotation});
  }
`;
