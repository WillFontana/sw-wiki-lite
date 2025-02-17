import React from "react";
import { IMovie } from "../../../store/slices/moviesApi";
import { StyledMovieBanner, StyledMovieCard } from "./styles";
import { useNavigate } from "react-router-dom";
import moviesBanners from "../../../utils/moviesBanners";

const MovieCard: React.FC<IMovie> = ({ title, episode_id }) => {
  const navigate = useNavigate();

  const handleSelectMovie = () => {
    navigate(`/movies/${episode_id}`);
  };

  return (
    <StyledMovieCard onClick={handleSelectMovie}>
      Star Wars episode {episode_id}: {title}
      <StyledMovieBanner
        style={{ backgroundImage: `url(${moviesBanners[episode_id]})` }}
      />
    </StyledMovieCard>
  );
};

export default MovieCard;
