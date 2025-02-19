import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { StyledCharacterCard } from "./styles";
import { ICharacter } from "../../../store/slices/charactersApi";

const CharacterCard: React.FC<ICharacter> = React.memo(({ name, id }) => {
  const navigate = useNavigate();

  const handleSelectCharacter = useCallback(() => {
    navigate(`/characters/${id}`);
  }, [navigate, id]);

  return (
    <StyledCharacterCard onClick={handleSelectCharacter}>
      <p>{name}</p>
    </StyledCharacterCard>
  );
});

export default CharacterCard;
