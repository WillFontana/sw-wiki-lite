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
  StyledLoaderContaier,
  StyledMovieBanner,
  StyledMovieDetails,
  StyledMovieInfoContainer,
  StyledSkipButton,
} from "./styles";
import SmallLoader from "../../components/Frames/SmallLoader";
import NotFound from "../NotFound";

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
  } = useGetMovieByIdQuery(handleMovieId(Number(id)));

  const [enableInfo, setEnableInfo] = useState<boolean>(false);

  const [charactersLoading, setCharactersLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const handleSkip = () => {
    setEnableInfo(true);
  };

  useEffect(
    function getCharacters() {
      if (!movie?.characters) return;
      const fetchCharacters = async () => {
        setCharactersLoading(true);
        try {
          const characterPromises = movie.characters.map(async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            const id = url.split("/").slice(-2, -1)[0];

            return { ...data, id };
          });

          const characterData = await Promise.all(characterPromises);
          setCharacters(characterData);
        } catch (error) {
          console.log(error);
        } finally {
          setCharactersLoading(false);
        }
      };

      fetchCharacters();
    },
    [movie]
  );

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  useEffect(
    function renderContent() {
      if (!enableInfo) {
        setTimeout(() => {
          setEnableInfo(true);
        }, 16000);
      }
    },
    [movie]
  );

  if (isLoading) return <Loader />;
  if (isError)
    return <NotFound type="error" title="Oops! Looks like an error occured!" />;
  if (!movie)
    return (
      <NotFound type="empty" title="Movie not avaliable for the momment!" />
    );
  return (
    <StyledMovieDetails>
      <StyledMovieInfoContainer>
        {!enableInfo ? (
          <OpeningCrawl
            episode={`Episode ${handleMovieSimbol(Number(id))}`}
            crawl={movie.opening_crawl}
            title={movie.title}
          />
        ) : (
          <></>
        )}
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
      </StyledMovieInfoContainer>
      {enableInfo ? (
        <StyledCharacterContainer>
          <h2>Main characters</h2>
          {charactersLoading && !characters.length ? (
            <StyledLoaderContaier>
              <SmallLoader />
            </StyledLoaderContaier>
          ) : (
            <></>
          )}
          <StyledCharactersList>
            {characters.length > 0 ? (
              characters.map((character) => (
                <CharacterCard key={character.name} {...character} />
              ))
            ) : (
              <></>
            )}
          </StyledCharactersList>
        </StyledCharacterContainer>
      ) : (
        <></>
      )}
      {!enableInfo ? (
        <StyledSkipButton onClick={handleSkip}>Skip intro</StyledSkipButton>
      ) : (
        <></>
      )}
    </StyledMovieDetails>
  );
};

export default MovieDetails;
