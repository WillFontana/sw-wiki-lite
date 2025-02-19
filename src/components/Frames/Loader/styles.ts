import styled, { DefaultTheme, keyframes } from "styled-components";

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

const saberConfig = (theme: DefaultTheme) => ({
  left: {
    color: theme.colors.glowBlue,
    rotation: "-31deg",
    align: "start",
  },
  right: {
    color: theme.colors.glowRed,
    rotation: "277deg",
    align: "end",
  },
});

export const StyledLoader = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing.medium};
`;

export const StyledLightSaber = styled.div<{ $side: "left" | "right" }>`
  width: 200px;
  height: 600px;
  display: flex;
  justify-content: ${({ theme, $side }) => saberConfig(theme)[$side].align};
  align-items: end;
  position: relative;

  &::before {
    content: "";
    border-radius: ${({ theme }) => theme.radius.small};
    width: 10px;
    height: 400px;
    background-color: ${({ theme }) => theme.colors.textPrimary};
    position: absolute;
    bottom: 132px;
    ${({ $side }) => ($side === "left" ? "left: 203px;" : "right: 227px;")}
    transform: ${({ $side }) =>
      $side === "left" ? "rotate(23deg)" : "rotate(-27deg)"};
    box-shadow: 0 0 20px
        ${({ theme, $side }) => saberConfig(theme)[$side].color},
      0 0 40px ${({ theme, $side }) => saberConfig(theme)[$side].color};
    animation: ${({ $side }) => igniteSaber($side)} 3s ease-in-out infinite;
  }

  img {
    width: 200px;
    transform: rotate(
      ${({ theme, $side }) => saberConfig(theme)[$side].rotation}
    );
  }
`;
