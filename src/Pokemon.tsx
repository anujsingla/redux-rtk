import { useState } from "react";
import { useGetPokemonByNameQuery } from "./services/pokemon";

export const Pokemon = () => {
  const [name, setName] = useState("bulbasaur");
  const { data } = useGetPokemonByNameQuery(name, {
    refetchOnFocus: true,
  });
  return (
    <div>
      Pokemon by name
      <button onClick={() => setName("ivysaur")}>ivysaur pokemon</button>
      <div>{data?.species?.name}</div>
      <div>
        <img src={data?.sprites.front_shiny} alt={data?.species.name} />
      </div>
    </div>
  );
};
