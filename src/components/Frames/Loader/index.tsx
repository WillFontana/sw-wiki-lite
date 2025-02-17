import React from "react";

import { StyledLightSaber, StyledLoader } from "./styles";

import lightSaber from "../../../assets/icons/lightsaber-realistic.png";


const Loader: React.FC = () => {
  return (
    <StyledLoader>
      <StyledLightSaber $side="left">
        <img src={lightSaber} />
      </StyledLightSaber>
      <StyledLightSaber $side="right">
        <img src={lightSaber} />
      </StyledLightSaber>
    </StyledLoader>
  );
};

export default Loader;
