import React, { ReactNode } from "react";
import { StyledSwitchAuthButton } from "./styles";

interface ISwitchAuthButton {
  url: string;
  children: ReactNode;
}

const SwitchAuthButton: React.FC<ISwitchAuthButton> = ({ url, children }) => {
  return <StyledSwitchAuthButton to={url}>{children}</StyledSwitchAuthButton>;
};

export default SwitchAuthButton;
