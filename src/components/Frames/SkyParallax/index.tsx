import React, { useMemo } from "react";

import starGif from "../../../assets/backgrounds/starBg.gif";

import { StyledSkyParallax } from "./styles";

const SkyParallax: React.FC = React.memo(() => {
  const backgroundImage = useMemo(() => `url(${starGif})`, []);

  return <StyledSkyParallax $bgImage={backgroundImage} />;
});

export default SkyParallax;
