import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Frames/Header";
import { StyledMainContainer } from "./styles";
import SkyParallax from "../components/Frames/SkyParallax";

const MainLayout: React.FC = () => {
  return (
    <>
      <SkyParallax />
      <StyledMainContainer>
        <Header />
        <Outlet />
      </StyledMainContainer>
    </>
  );
};

export default MainLayout;
