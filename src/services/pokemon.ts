import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IPokemon {
  id: string;
  ability: string;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    front_shiny: string;
  };
}

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  tagTypes: ["PokeMon"],
  endpoints: (builder) => ({
    getPokemonByName: builder.query<IPokemon, string>({
      query: (name) => `pokemon/${name}`,
      providesTags: ["PokeMon"],
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
