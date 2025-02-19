import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { IMovie } from "../../../store/slices/moviesApi";

import moviesBanners from "../../../utils/moviesBanners";
import {
  StyledMovieBanner,
  StyledMovieCard,
  StyledMovieOverlay,
} from "./styles";

interface IMovieCard extends IMovie {
  delay: number;
}

const MovieCard: React.FC<IMovieCard> = React.memo(
  ({ title, episode_id, delay }) => {
    const navigate = useNavigate();

    const handleSelectMovie = useCallback(() => {
      navigate(`/movies/${episode_id}`);
    }, [navigate, episode_id]);

    const backgroundImage = useMemo(
      () => `url(${moviesBanners[episode_id]})`,
      [episode_id]
    );

    return (
      <StyledMovieCard $delay={Math.max(delay, 0)} onClick={handleSelectMovie}>
        <StyledMovieBanner style={{ backgroundImage }} />
        <StyledMovieOverlay>
          <h2>
            Star Wars: <br /> <span>{title}</span>
          </h2>
          <p>See movie details</p>
        </StyledMovieOverlay>
      </StyledMovieCard>
    );
  }
);

export default MovieCard;
