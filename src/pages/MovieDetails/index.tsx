import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../../store/slices/moviesApi";
import moviesBanners from "../../utils/moviesBanners";
import {
  StyledCharactersList,
  StyledMovieBanner,
  StyledMovieDetails,
} from "./styles";
import CharacterCard from "../../components/Cards/CharacterCard";
import { ICharacter } from "../../store/slices/charactersApi";
import handleMovieId from "../../utils/movieIds";

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const { data: movie, isLoading, isError } = useGetMovieByIdQuery(handleMovieId(Number(id)));

  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    if (!movie?.characters) return;

    const fetchCharacters = async () => {
      const characterPromises = movie.characters.map(async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        const id = url.split("/").slice(-2, -1)[0];

        return { ...data, id };
      });

      const characterData = await Promise.all(characterPromises);
      setCharacters(characterData);
    };

    fetchCharacters();
  }, [movie]);

  if (isLoading) return <p>Carregando...</p>;
  if (isError || !movie) return <p>Filme não encontrado</p>;

  return (
    <StyledMovieDetails>
      <StyledMovieBanner
        style={{ backgroundImage: `url(${moviesBanners[movie.episode_id]})` }}
      />
      <h1>
        Star Wars Episode {id}: {movie.title}
      </h1>
      <p>Dirigido por: {movie.director}</p>
      <p>Produzido por: {movie.producer}</p>
      <p>Lançamento: {dayjs(movie.release_date).format("DD/MM/YYYY")}</p>
      <p>{movie.opening_crawl}</p>

      <h2>Personagens importantes</h2>
      <StyledCharactersList>
        {characters.length === 0 ? (
          <p>Carregando personagens...</p>
        ) : (
          characters.map((character) => (
            <CharacterCard key={character.name} {...character} />
          ))
        )}
      </StyledCharactersList>
    </StyledMovieDetails>
  );
};

export default MovieDetails;
