import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSwitchAuthButton = styled(Link)`
  display: inline-block;
  margin-top: 25px;
  font-size: 14px;
  color: #00aaff;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    text-shadow: 0px 0px 5px #00aaff, 0px 0px 10px #0077ff;
  }
`;
