import dayjs from "dayjs";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/Cards/MovieCard";
import { RootState } from "../../store";
import { useGetMoviesQuery } from "../../store/slices/moviesApi";
import { StyledDashboard } from "./styles";
import Loader from "../../components/Frames/Loader";
import NotFound from "../NotFound";

const Dashboard: React.FC = () => {
  const selectedEra = useSelector((state: RootState) => state.era.selectedEra);
  const { data: movies, isError, isLoading } = useGetMoviesQuery();

  const categorizedMovies = useMemo(() => {
    if (!movies?.results) return { classic: [], prequels: [], sequels: [] };

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
      { classic: [], prequels: [] } as {
        classic: typeof movies.results;
        prequels: typeof movies.results;
      }
    );
  }, [movies]);

  if (isError)
    return <NotFound title="Looks like an error occured!" type="error" />;
  if (isLoading) return <Loader />;
  if (!movies?.results.length)
    return (
      <NotFound title="No movies avaliabe for the momment!" type="empty" />
    );

  return (
    <StyledDashboard>
      {categorizedMovies[selectedEra].map((movie, index) => (
        <MovieCard key={movie.episode_id} {...movie} delay={index} />
      ))}
    </StyledDashboard>
  );
};

export default Dashboard;
