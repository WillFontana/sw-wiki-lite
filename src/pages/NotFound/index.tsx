import React from "react";

import errorIcon from "../../assets/icons/bb9e.png";
import emptyIcon from "../../assets/icons/bb8.png";
import pageIcon from "../../assets/icons/r2d2.png";
import { StyledNoContent } from "./styles";

interface INotFound {
  title: string;
  type: "page" | "error" | "empty";
}

const NotFound: React.FC<INotFound> = ({ title, type }) => {
  const handleType = () => {
    switch (type) {
      case "page":
        return pageIcon;
      case "error":
        return errorIcon;
      default:
        return emptyIcon;
    }
  };

  return (
    <StyledNoContent $type={type}>
      <img src={handleType()} />
      <h2>{title}</h2>
    </StyledNoContent>
  );
};

export default NotFound;
