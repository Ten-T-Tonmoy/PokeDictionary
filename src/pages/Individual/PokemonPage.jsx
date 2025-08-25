import React, { useContext, useState, useEffect } from "react";
import { PokemonStatsPage } from "./IndividualPage";
import { EachPokemonContext } from "../../context/EachPokemonContext";
import { useNavigate } from "react-router-dom";
import MainBg from "../Home/MainBg";

//<Link to={`/game/${game.slug}`}> on cards
// not using params to get those!?
export default function PokemonPage() {
  const [showStats, setShowStats] = useState(true);
  const { pokemon } = useContext(EachPokemonContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!showStats) {
      navigate("/home");
    }
  }, [showStats, navigate]);
  if (showStats) { 
    return (
      <MainBg>
        <PokemonStatsPage
          pokemon={pokemon}
          onBack={() => setShowStats(false)}
        />
      </MainBg>
    );
  }

  return null;
}
