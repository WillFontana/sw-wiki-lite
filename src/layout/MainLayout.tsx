import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Frames/Header";

import { StyledMainContainer } from "./styles";

const MainLayout: React.FC = () => (
  <StyledMainContainer>
    <Header />
    <Outlet />
  </StyledMainContainer>
);

export default MainLayout;
