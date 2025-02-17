import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IMovie {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
}

export interface IApiResponse {
  results: IMovie[];
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getMovies: builder.query<IApiResponse, void>({
      query: () => "/films/",
      providesTags: ["Movies"]
    }),
    getMovieById: builder.query<IMovie, number>({
      query: (id) => `/films/${id}/`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = moviesApi;
