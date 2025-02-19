import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

import { ICharacter } from "../../store/slices/charactersApi";
import { useGetMovieByIdQuery } from "../../store/slices/moviesApi";

import handleMovieId, { handleMovieSymbol } from "../../utils/movieIds";
import moviesBanners from "../../utils/moviesBanners";

import CharacterCard from "../../components/Cards/CharacterCard";
import Loader from "../../components/Frames/Loader";
import OpeningCrawl from "../../components/Frames/OpeningCrawl";
import SmallLoader from "../../components/Frames/SmallLoader";
import NotFound from "../NotFound";

import {
  StyledCharacterContainer,
  StyledCharactersList,
  StyledLoaderContainer,
  StyledMovieBanner,
  StyledMovieDetails,
  StyledMovieInfoContainer,
  StyledSkipButton,
} from "./styles";

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
  } = useGetMovieByIdQuery(handleMovieId(Number(id)));

  const [enableInfo, setEnableInfo] = useState(false);
  const [charactersLoading, setCharactersLoading] = useState(false);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    if (!movie?.characters) return;

    const fetchCharacters = async () => {
      setCharactersLoading(true);
      try {
        const characterData = await Promise.all(
          movie.characters.map(async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            return { ...data, id: url.split("/").slice(-2, -1)[0] };
          })
        );

        setCharacters(characterData);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setCharactersLoading(false);
      }
    };

    fetchCharacters();
  }, [movie]);

  useEffect(() => {
    if (!enableInfo) {
      setTimeout(() => setEnableInfo(true), 16000);
    }
  }, [enableInfo]);

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <NotFound type="error" title="Oops! Looks like an error occurred!" />
    );
  if (!movie)
    return <NotFound type="empty" title="Movie not available at the moment!" />;

  return (
    <StyledMovieDetails>
      <StyledMovieInfoContainer>
        {!enableInfo ? (
          <OpeningCrawl
            episode={`Episode ${handleMovieSymbol(Number(id))}`}
            crawl={movie.opening_crawl}
            title={movie.title}
          />
        ) : (
          <>
            <StyledMovieBanner
              style={{
                backgroundImage: `url(${moviesBanners[movie.episode_id]})`,
              }}
            />
            <div>
              <h1>
                Star Wars Episode {handleMovieSymbol(Number(id))}: <br />
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
        )}
      </StyledMovieInfoContainer>

      {enableInfo && (
        <StyledCharacterContainer>
          <h2>Main characters</h2>
          {charactersLoading && !characters.length && (
            <StyledLoaderContainer>
              <SmallLoader />
            </StyledLoaderContainer>
          )}
          <StyledCharactersList>
            {characters.length > 0 &&
              characters.map((character) => (
                <CharacterCard key={character.name} {...character} />
              ))}
          </StyledCharactersList>
        </StyledCharacterContainer>
      )}

      {!enableInfo && (
        <StyledSkipButton onClick={() => setEnableInfo(true)}>
          Skip intro
        </StyledSkipButton>
      )}
    </StyledMovieDetails>
  );
};

export default MovieDetails;
