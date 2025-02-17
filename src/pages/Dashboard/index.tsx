import dayjs from "dayjs";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/Cards/MovieCard";
import { RootState } from "../../store";
import { useGetMoviesQuery } from "../../store/slices/moviesApi";
import { StyledDashboard } from "./styles";

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

  useEffect(() => {
    console.log(categorizedMovies);
  }, [categorizedMovies]);

  if (isLoading) return <>Loading</>;
  if (isError) return <>Erro ao carregar os filmes</>;
  if (!movies?.results.length) return <>Nenhum filme disponível</>;

  return (
    <StyledDashboard>
      {categorizedMovies[selectedEra].map((movie) => (
        <MovieCard key={movie.episode_id} {...movie}  />
      ))}
    </StyledDashboard>
  );
};

export default Dashboard;
