import React, { useContext, useState } from "react";
import { PokemonStatsPage } from "./IndividualPage";
import { EachPokemonContext } from "../../context/EachPokemonContext";


//<Link to={`/game/${game.slug}`}> on cards
// not using params to get those!?
export default function PokemonPage() {
  const [showStats, setShowStats] = useState(true);
  const { pokemon } = useContext(EachPokemonContext);

  if (showStats) {
    return (
      <PokemonStatsPage pokemon={pokemon} onBack={() => setShowStats(false)} />
    );
  }

  return (
    <div className="min-h-screen relative z-[999] bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
      <button
        onClick={() => setShowStats(true)}
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-xl font-bold transition-colors shadow-xl"
      >
        View Charizard Stats
      </button>
    </div>
  );
}
