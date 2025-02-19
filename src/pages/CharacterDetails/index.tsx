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

  const [films, setFilms] = useState<IFilm[]>([]);
  const [starships, setStarships] = useState<IShip[]>([]);
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [homeworld, setHomeworld] = useState<IPlanet | null>(null);
  const [loadingState, setLoadingState] = useState({
    films: false,
    starships: false,
    vehicles: false,
  });

  const handleSelectMovie = (id: number) => navigate(`/movies/${id}`);

  useEffect(() => {
    if (!character) return;

    const fetchAllData = async () => {
      if (character.films.length) {
        setLoadingState((prev) => ({ ...prev, films: true }));
        const data = await fetchData(character.films);
        setFilms(data as IFilm[]);
        setLoadingState((prev) => ({ ...prev, films: false }));
      }

      if (character.starships.length) {
        setLoadingState((prev) => ({ ...prev, starships: true }));
        const data = await fetchData(character.starships);
        setStarships(data as IShip[]);
        setLoadingState((prev) => ({ ...prev, starships: false }));
      }

      if (character.vehicles.length) {
        setLoadingState((prev) => ({ ...prev, vehicles: true }));
        const data = await fetchData(character.vehicles);
        setVehicles(data as IVehicle[]);
        setLoadingState((prev) => ({ ...prev, vehicles: false }));
      }

      if (character.homeworld) {
        fetch(character.homeworld)
          .then((res) => res.json())
          .then(setHomeworld)
          .catch((error) =>
            console.error("Erro ao buscar planeta natal:", error)
          );
      }
    };

    fetchAllData();
  }, [character]);

  if (isError)
    return (
      <NotFound title="Oops! Looks like an error occurred!" type="error" />
    );
  if (isLoading) return <Loader />;
  if (!character)
    return (
      <NotFound title="Character not avaliable for the moment!" type="empty" />
    );

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
              <p>{homeworld ? homeworld.name : "Unknown"}</p>
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

      {loadingState.vehicles && (
        <StyledLoaderContainer>
          <SmallLoader />
        </StyledLoaderContainer>
      )}
      {vehicles.length > 0 && (
        <>
          <h2>Vehicles:</h2>
          <StyledVehicles>
            {vehicles.map((vehicle) => (
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

      {loadingState.starships && (
        <StyledLoaderContainer>
          <SmallLoader />
        </StyledLoaderContainer>
      )}
      {starships.length > 0 && (
        <>
          <h2>Ships:</h2>
          <StyledVehicles>
            {starships.map((ship) => (
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

      {loadingState.films && (
        <StyledLoaderContainer>
          <SmallLoader />
        </StyledLoaderContainer>
      )}
      {films.length > 0 && (
        <>
          <h2>Featured movies:</h2>
          <StyledFeaturedMovies>
            {films.map((film) => (
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
