import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { setEra } from "../../../store/slices/eraSlice";
import { StyledHeader, StyledNav, StyledNavItem, StyledReturn } from "./styles";

import trooperIcon from "../../../assets/icons/stormtrooper.png";
import cloneIcon from "../../../assets/icons/clone.png";
import shipIcon from "../../../assets/icons/naboo-ship.png";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const selectedEra = useSelector((state: RootState) => state.era.selectedEra);
  const location = useLocation();
  const navigate = useNavigate();

  const [animation, setAnimation] = useState<"intro" | "leaving" | undefined>(
    undefined
  );

  const handleBack = () => {
    setAnimation("leaving");
    setTimeout(() => {
      navigate(-1);
      setAnimation(undefined);
    }, 300);
  };

  const handleSelectEra = (era: "prequels" | "classic") => {
    if (location.pathname !== "/") {
      navigate("/");
      setAnimation("leaving")
    }
    dispatch(setEra(era));
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setAnimation("intro");
    }
  }, [location]);

  return (
    <StyledHeader>
      <StyledNav>
        <ul>
          <StyledNavItem
            $side="light"
            $active={selectedEra === "prequels"}
            onClick={() => handleSelectEra("prequels")}
          >
            <img src={cloneIcon} /> <p>The clone wars</p>
          </StyledNavItem>

          <StyledReturn $animation={animation} onClick={handleBack}>
            <img src={shipIcon} aria-label="Retornar" />
          </StyledReturn>

          <StyledNavItem
            $side="dark"
            $active={selectedEra === "classic"}
            onClick={() => handleSelectEra("classic")}
          >
            <img src={trooperIcon} /> <p>The galatic empire</p>
          </StyledNavItem>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
