import React, { useMemo } from "react";
import { StyledLightSaber, StyledLoader } from "./styles";
import lightSaber from "../../../assets/icons/lightsaber-realistic.png";

const Loader = React.memo(() => {
  const saberImage = useMemo(() => lightSaber, []);

  return (
    <StyledLoader>
      <StyledLightSaber $side="left">
        <img src={saberImage} alt="Left Lightsaber" />
      </StyledLightSaber>
      <StyledLightSaber $side="right">
        <img src={saberImage} alt="Right Lightsaber" />
      </StyledLightSaber>
    </StyledLoader>
  );
});

export default Loader;
