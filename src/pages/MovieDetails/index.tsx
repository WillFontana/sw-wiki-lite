import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../../components/Cards/CharacterCard";
import Loader from "../../components/Frames/Loader";
import OpeningCrawl from "../../components/Frames/OpeningCrawl";
import { ICharacter } from "../../store/slices/charactersApi";
import { useGetMovieByIdQuery } from "../../store/slices/moviesApi";
import handleMovieId, { handleMovieSimbol } from "../../utils/movieIds";
import moviesBanners from "../../utils/moviesBanners";
import {
  StyledCharacterContainer,
  StyledCharactersList,
  StyledMovieBanner,
  StyledMovieDetails,
  StyledMovieInfoContainer,
} from "./styles";

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
  } = useGetMovieByIdQuery(handleMovieId(Number(id)));

  const [enableInfo, setEnableInfo] = useState<boolean>(false);

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

  useEffect(
    function renderContent() {
      setTimeout(() => {
        setEnableInfo(true);
      }, 16000);
    },
    [movie]
  );

  if (isLoading) return <Loader />;
  if (isError || !movie) return <p>Filme não encontrado</p>;

  return (
    <StyledMovieDetails>
      <StyledMovieInfoContainer>
        {enableInfo ? (
          <>
            <StyledMovieBanner
              style={{
                backgroundImage: `url(${moviesBanners[movie.episode_id]})`,
              }}
            />
            <div>
              <h1>
                Star Wars Episode {handleMovieSimbol(Number(id))}: <br />{" "}
                <span>{movie.title}</span>
              </h1>
              <h4>Directed by: {movie.director}</h4>
              <h4>Produced by: {movie.producer}</h4>
              <h4>
                Release date: {dayjs(movie.release_date).format("DD/MM/YYYY")}
              </h4>
              <p>{movie.opening_crawl}</p>
            </div>
          </>
        ) : (
          <></>
        )}

        {!enableInfo ? (
          <OpeningCrawl
            episode={`Episode ${handleMovieSimbol(Number(id))}`}
            crawl={movie.opening_crawl}
            title={movie.title}
          />
        ) : (
          <></>
        )}
      </StyledMovieInfoContainer>
      {enableInfo ? (
        <StyledCharacterContainer>
          <h2>Main characters</h2>
          <StyledCharactersList>
            {characters.length === 0 ? (
              <p>Carregando personagens...</p>
            ) : (
              characters.map((character) => (
                <CharacterCard key={character.name} {...character} />
              ))
            )}
          </StyledCharactersList>
          )
        </StyledCharacterContainer>
      ) : (
        <></>
      )}
    </StyledMovieDetails>
  );
};

export default MovieDetails;
