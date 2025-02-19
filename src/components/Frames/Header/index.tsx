import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { RootState } from "../../../store";
import { setEra } from "../../../store/slices/eraSlice";

import cloneIcon from "../../../assets/icons/clone.png";
import shipIcon from "../../../assets/icons/naboo-ship.png";
import trooperIcon from "../../../assets/icons/stormtrooper.png";

import { StyledHeader, StyledNav, StyledNavItem, StyledReturn } from "./styles";


interface EraOption {
  key: "prequels" | "classic";
  label: string;
  icon: string;
  side: "light" | "dark";
}

const Header: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const selectedEra = useSelector((state: RootState) => state.era.selectedEra);
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
      setAnimation("leaving");
      setTimeout(() => {
        navigate("/");
        setAnimation(undefined);
        dispatch(setEra(era));
      }, 300);
    } else {
      dispatch(setEra(era));
    }
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setAnimation("intro");
    }
  }, [location.pathname]);

  const eras: EraOption[] = [
    {
      key: "prequels",
      label: "The Clone Wars",
      icon: cloneIcon,
      side: "light",
    },
    {
      key: "classic",
      label: "The Galactic Empire",
      icon: trooperIcon,
      side: "dark",
    },
  ];

  return (
    <StyledHeader>
      <StyledNav>
        <ul>
          <StyledNavItem
            key={eras[0].key}
            $side={eras[0].side}
            $active={selectedEra === eras[0].key}
            onClick={() => handleSelectEra(eras[0].key)}
          >
            <img src={eras[0].icon} alt={`${eras[0].label} Icon`} />
            <p>{eras[0].label}</p>
          </StyledNavItem>

          <StyledReturn $animation={animation} onClick={handleBack}>
            <img src={shipIcon} alt="Return Icon" aria-label="Go back" />
          </StyledReturn>

          <StyledNavItem
            key={eras[1].key}
            $side={eras[1].side}
            $active={selectedEra === eras[1].key}
            onClick={() => handleSelectEra(eras[1].key)}
          >
            <img src={eras[1].icon} alt={`${eras[1].label} Icon`} />
            <p>{eras[1].label}</p>
          </StyledNavItem>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
});

export default Header;
