import React from "react";
import { useGetCharacterByIdQuery } from "../../store/slices/charactersApi";
import { useParams } from "react-router-dom";

const CharacterDetails: React.FC = () => {
  const { id } = useParams();

  const {
    data: character,
    isError,
    isLoading,
  } = useGetCharacterByIdQuery(Number(id));

  if (isError) return <>Ocorreu um erro ao pegar os dados do personagem</>;
  if (isLoading) return <>Loading...</>;
  if (!character) return <div>O personagem não está disponível</div>;

  return <>{character.name}</>;
};

export default CharacterDetails;
