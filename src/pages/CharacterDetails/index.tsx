import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Frames/Loader";
import { useGetCharacterByIdQuery } from "../../store/slices/charactersApi";
import { fetchData } from "../../utils/api";
import {
  StyledCharacterDetails,
  StyledFeaturedMovie,
  StyledFeaturedMovies,
  StyledHeadline,
  StyledInfo,
  StyledInfoContainer,
  StyledLoaderContainer,
  StyledPicture,
  StyledVehicle,
  StyledVehicles,
} from "./styles";
import SmallLoader from "../../components/Frames/SmallLoader";
import NotFound from "../NotFound";

interface IFilm {
  title: string;
  url: string;
  episode_id: number;
}

interface IShip {
  name: string;
  url: string;
  model: string;
}

interface IVehicle {
  name: string;
  url: string;
}

interface IPlanet {
  name: string;
  url: string;
}

const CharacterDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: character,
    isError,
    isLoading,
  } = useGetCharacterByIdQuery(Number(id));

  const [films, setFilms] = useState<{ content: IFilm[]; isLoading: boolean }>({
    content: [],
    isLoading: false,
  });

  const [starships, setStarships] = useState<{
    content: IShip[];
    isLoading: boolean;
  }>({
    content: [],
    isLoading: false,
  });

  const [vehicles, setVehicles] = useState<{
    content: IVehicle[];
    isLoading: boolean;
  }>({
    content: [],
    isLoading: false,
  });

  const [homeworld, setHomeworld] = useState<IPlanet | null>(null);

  const handleSelectMovie = (id: number) => {
    navigate(`/movies/${id}`);
  };

  useEffect(() => {
    if (!character) return;

    if (character.films.length) {
      setFilms((prev) => ({ ...prev, isLoading: true }));
      fetchData(character.films).then((data) =>
        setFilms({ content: data as IFilm[], isLoading: false })
      );
    }

    if (character.starships.length) {
      setStarships((prev) => ({ ...prev, isLoading: true }));
      fetchData(character.starships).then((data) =>
        setStarships({ content: data as IShip[], isLoading: false })
      );
    }

    if (character.vehicles.length) {
      setVehicles((prev) => ({ ...prev, isLoading: true }));
      fetchData(character.vehicles).then((data) =>
        setVehicles({ content: data as IVehicle[], isLoading: false })
      );
    }

    if (character.homeworld) {
      fetch(character.homeworld)
        .then((res) => res.json())
        .then((data) => setHomeworld(data as IPlanet))
        .catch((error) =>
          console.error("Erro ao buscar planeta natal:", error)
        );
    }
  }, [character]);

  if (isError) return <NotFound title="Oops! Looks like an error occured!" type="error" />;
  if (isLoading) return <Loader />;
  if (!character) return <NotFound title="Character not avaliable for the momment!" type="empty" />;

  return (
    <StyledCharacterDetails>
      <StyledHeadline>
        <StyledPicture>
          {/* Como não retornamos nenhuma imagem da api vou deixar esse no data pra ficar um efeito legal hehehe */}
          <p>No data</p> 
        </StyledPicture>

        <div>
          <h2>{character.name}</h2>

          <StyledInfoContainer>
            <StyledInfo>
              <h3>Birth year</h3>
              <p>{character.birth_year}</p>
            </StyledInfo>
            <StyledInfo>
              <h3>Home world</h3>
              <p>{homeworld ? homeworld.name : "Desconhecido"}</p>
            </StyledInfo>
            <StyledInfo>
              <h3>Height</h3>
              <p>{character.height} cm</p>
            </StyledInfo>
            <StyledInfo>
              <h3>Mass</h3>
              <p>{character.mass} kg</p>
            </StyledInfo>
            <StyledInfo>
              <h3>Gender</h3>
              <p>{character.gender}</p>
            </StyledInfo>
            <StyledInfo>
              <h3>Hair color</h3>
              <p>{character.hair_color}</p>
            </StyledInfo>
            <StyledInfo>
              <h3>Eye color</h3>
              <p>{character.eye_color}</p>
            </StyledInfo>
            <StyledInfo>
              <h3>Skin color</h3>
              <p>{character.skin_color}</p>
            </StyledInfo>
          </StyledInfoContainer>
        </div>
      </StyledHeadline>

      {vehicles.isLoading && (
        <StyledLoaderContainer>
          <SmallLoader />
        </StyledLoaderContainer>
      )}
      {vehicles.content.length > 0 && (
        <>
          <h2>Vehicles:</h2>
          <StyledVehicles>
            {vehicles.content.map((vehicle) => (
              <StyledVehicle key={vehicle.url}>
                <div>
                  <h3>Name</h3>
                  <p>{vehicle.name}</p>
                </div>
              </StyledVehicle>
            ))}
          </StyledVehicles>
        </>
      )}

      {starships.isLoading && (
        <StyledLoaderContainer>
          <SmallLoader />
        </StyledLoaderContainer>
      )}

      {starships.content.length > 0 && (
        <>
          <h2>Ships:</h2>
          <StyledVehicles>
            {starships.content.map((ship) => (
              <StyledVehicle key={ship.url}>
                <div>
                  <h3>Name</h3>
                  <p>{ship.name}</p>
                </div>
                <div>
                  <h4>Model</h4>
                  <p>{ship.model}</p>
                </div>
              </StyledVehicle>
            ))}
          </StyledVehicles>
        </>
      )}

      {films.isLoading && (
        <StyledLoaderContainer>
          <SmallLoader />
        </StyledLoaderContainer>
      )}

      {films.content.length > 0 && (
        <>
          <h2>Featured movies:</h2>

          <StyledFeaturedMovies>
            {films.content.map((film) => (
              <StyledFeaturedMovie
                key={film.url}
                onClick={() => handleSelectMovie(film.episode_id)}
              >
                <p>{film.title}</p>
              </StyledFeaturedMovie>
            ))}
          </StyledFeaturedMovies>
        </>
      )}
    </StyledCharacterDetails>
  );
};

export default CharacterDetails;
