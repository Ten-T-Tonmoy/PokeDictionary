import { createContext, useState } from "react";

export const EachPokemonContext = createContext();

export const EachPokemonContextProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState(null);
  return (
    <EachPokemonContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </EachPokemonContext.Provider>
  );
};
