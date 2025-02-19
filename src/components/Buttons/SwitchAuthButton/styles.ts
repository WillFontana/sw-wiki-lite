import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSwitchAuthButton = styled(Link)`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.textSizes.small};
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.primaryLight},
      0px 0px 10px ${({ theme }) => theme.colors.primaryDark};
  }
`;
