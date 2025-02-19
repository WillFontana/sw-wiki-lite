import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useGetMoviesQuery } from "../../store/slices/moviesApi";

import dayjs from "dayjs";

import MovieCard from "../../components/Cards/MovieCard";
import Loader from "../../components/Frames/Loader";
import NotFound from "../NotFound";

import { StyledDashboard } from "./styles";

const Dashboard: React.FC = () => {
  const selectedEra = useSelector((state: RootState) => state.era.selectedEra);

  const { data: movies, isError, isLoading } = useGetMoviesQuery();

  const categorizedMovies = useMemo(() => {
    if (!movies?.results) return { classic: [], prequels: [] };

    return movies.results.reduce(
      (acc, movie) => {
        const year = dayjs(movie.release_date).year();

        if (year >= 1977 && year <= 1983) {
          acc.classic.push(movie);
        } else if (year >= 1999 && year <= 2005) {
          acc.prequels.push(movie);
        }
        return acc;
      },
      {
        classic: [] as typeof movies.results,
        prequels: [] as typeof movies.results,
      }
    );
  }, [movies]);

  if (isError)
    return <NotFound title="Looks like an error occurred!" type="error" />;
  if (isLoading) return <Loader />;
  if (!movies?.results.length)
    return <NotFound title="No movies available at the moment!" type="empty" />;

  const selectedMovies = categorizedMovies[selectedEra] || [];

  return (
    <StyledDashboard>
      {selectedMovies.map((movie, index) => (
        <MovieCard key={movie.episode_id} {...movie} delay={index} />
      ))}
    </StyledDashboard>
  );
};

export default Dashboard;
