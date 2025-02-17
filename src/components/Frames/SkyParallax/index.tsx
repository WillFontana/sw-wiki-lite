import React from "react";

import starGif from "../../../assets/backgrounds/starBg.gif";
import { StyledSkyParallax } from "./styles";

const SkyParallax: React.FC = () => {
  return <StyledSkyParallax style={{ backgroundImage: `url(${starGif})` }} />;
};

export default SkyParallax;
