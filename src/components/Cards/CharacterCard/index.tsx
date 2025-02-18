import React from "react";
import { StyledCharacterCard } from "./styles";
import {
  ICharacter,
} from "../../../store/slices/charactersApi";
import { useNavigate } from "react-router-dom";

const CharacterCard: React.FC<ICharacter> = ({ name, id }) => {
  const navigate = useNavigate();

  const handleSelectCharacter = () => {
    navigate(`/characters/${id}`);
  };

  return (
    <StyledCharacterCard onClick={handleSelectCharacter}>
      <p>{name}</p>
    </StyledCharacterCard>
  );
};

export default CharacterCard;
