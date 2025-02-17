import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ICharacter {
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
}


export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  tagTypes: ["Characters"],
  endpoints: (builder) => ({
    getCharacterById: builder.query<ICharacter, number>({
      query: (id) => `/people/${id}/`,
      providesTags: ["Characters"]
    }),
  }),
});

export const { useGetCharacterByIdQuery } = charactersApi;
