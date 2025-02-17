import React from "react";
import { IMovie } from "../../../store/slices/moviesApi";
import {
  StyledMovieBanner,
  StyledMovieCard,
  StyledMovieOverlay,
} from "./styles";
import { useNavigate } from "react-router-dom";
import moviesBanners from "../../../utils/moviesBanners";

interface IMovieCard extends IMovie {
  delay: number
}

const MovieCard: React.FC<IMovieCard> = ({ title, episode_id, delay }) => {
  const navigate = useNavigate();

  const handleSelectMovie = () => {
    navigate(`/movies/${episode_id}`);
  };

  return (
    <StyledMovieCard $delay={delay} onClick={handleSelectMovie}>
      <StyledMovieBanner
        style={{ backgroundImage: `url(${moviesBanners[episode_id]})` }}
      />
      <StyledMovieOverlay>
        <h2>
          Star Wars: <br /> <span>{title}</span>
        </h2>
        <p>See movie details</p>
      </StyledMovieOverlay>
    </StyledMovieCard>
  );
};

export default MovieCard;
