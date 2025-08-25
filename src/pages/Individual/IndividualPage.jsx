import React, { useState } from "react";
import MenuBar from "./MenuBar";
import SpritesTab from "./SpritesTab";
import MovesTab from "./MovesTab";
import InfoTab from "./InfoTab";

//icons
import { IoMdArrowBack } from "react-icons/io";
import { BsSoundwave } from "react-icons/bs";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

// Type colors for backgrounds
const typeColors = {
  normal: "from-stone-300 to-stone-400",
  fire: "from-orange-400 via-red-500 to-red-600",
  water: "from-blue-400 via-blue-500 to-blue-600",
  grass: "from-green-400 via-emerald-500 to-green-600",
  electric: "from-yellow-300 via-yellow-400 to-amber-500",
  ice: "from-cyan-200 via-cyan-400 to-blue-400",
  fighting: "from-red-600 via-orange-600 to-red-700",
  poison: "from-purple-400 via-violet-500 to-purple-600",
  ground: "from-amber-400 via-orange-500 to-yellow-600",
  flying: "from-sky-300 via-indigo-400 to-blue-500",
  psychic: "from-pink-400 via-rose-500 to-pink-600",
  bug: "from-lime-400 via-green-500 to-emerald-500",
  rock: "from-stone-400 via-amber-600 to-orange-700",
  ghost: "from-indigo-600 via-purple-700 to-indigo-900",
  dragon: "from-indigo-500 via-purple-600 to-violet-700",
  dark: "from-gray-700 via-slate-800 to-gray-900",
  steel: "from-slate-300 via-gray-400 to-slate-500",
  fairy: "from-pink-200 via-rose-300 to-pink-400",
};

export const PokemonStatsPage = ({ pokemon, onBack }) => {
  const [currentTab, setCurrentTab] = useState("stats");
  const [currentSprite, setCurrentSprite] = useState("home");
  const [isShiny, setIsShiny] = useState(false);

  const primaryType = pokemon.types[0].type.name;

  const formatStatName = (statName) => {
    switch (statName) {
      case "hp":
        return "HP";
      case "attack":
        return "Attack";
      case "defense":
        return "Defense";
      case "speed":
        return "Speed";
      case "special-attack":
        return "Sp. Atk";
      case "special-defense":
        return "Sp. Def";
      default:
        return statName;
    }
  };
  // const spritesCollection = ["official-artwork", "dream_world", "showdown"];

  const getCurrentSprite = () => {
    if (currentSprite === "official") {
      return pokemon.sprites.other?.["official-artwork"]?.front_default;
    } else if (currentSprite === "home") {
      return pokemon.sprites.other?.["home"]?.front_default;
    } else if (currentSprite === "dream") {
      return pokemon.sprites.other?.dream_world?.front_default;
    } else if (currentSprite === "showdown") {
      return pokemon.sprites.other?.showdown?.front_default;
    }
    // Default sprite
    return isShiny
      ? pokemon.sprites.front_shiny
      : pokemon.sprites.front_default;
  };

  const playCry = (type = "latest") => {
    if (pokemon.cries?.[type]) {
      const audio = new Audio(pokemon.cries[type]);
      audio.play().catch((err) => console.log("Audio play failed:", err));
    }
  };

  const totalStats = pokemon.stats.reduce(
    (sum, stat) => sum + stat.base_stat,
    0
  );

  return (
    <div
      className=" border-[15px] border-t-0 border-[#e00c2c] w-full  overflow-hidden flex-1 
    "
    >
      {/*------------------main frame --------------------*/}
      <div className="bg-white h-full relative  overflow-y-auto scroll-hide  w-full">
        {/* Main Content */}
        <div className="bg-gray-100 rounded-xl p-6">
          {/* Stats Tab */}
          {currentTab === "stats" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Side - Stats */}
              <div className="space-y-4">
                {/* Base Stats */}
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-gray-700 mb-3 flex justify-between">
                    Base Stats
                    <span className="text-sm font-normal">
                      Total: {totalStats}
                    </span>
                  </h3>
                  {pokemon.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                    >
                      <span className="font-semibold text-gray-700 w-20">
                        {formatStatName(stat.stat.name)}
                      </span>
                      <div className="flex items-center gap-3 flex-1">
                        <span className="font-mono text-gray-800 w-8 text-right">
                          {stat.base_stat}
                        </span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-32">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              stat.base_stat >= 100
                                ? "from-green-400 to-green-600"
                                : stat.base_stat >= 70
                                ? "from-yellow-400 to-yellow-600"
                                : "from-red-400 to-red-600"
                            }`}
                            style={{
                              width: `${Math.min(
                                (stat.base_stat / 150) * 100,
                                100
                              )}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Type & Physical */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-gray-700 mb-3">Type</h3>
                    <div className="flex flex-col gap-2">
                      {pokemon.types.map((type, index) => (
                        <span
                          key={index}
                          className={`px-3 py-2 rounded-lg text-white text-center bg-gradient-to-r ${
                            typeColors[type.type.name]
                          }`}
                        >
                          {type.type.name.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-gray-700 mb-3">Physical</h3>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="font-semibold">Height:</span>{" "}
                        {(pokemon.height / 10).toFixed(1)}m
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold">Weight:</span>{" "}
                        {(pokemon.weight / 10).toFixed(1)}kg
                      </p>
                      <p className="text-sm">
                        <span className="font-semibold">Base XP:</span>{" "}
                        {pokemon.base_experience}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Abilities */}
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-gray-700 mb-3">Abilities</h3>
                  <div className="space-y-2">
                    {pokemon.abilities.map((ability, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${
                          ability.is_hidden
                            ? "bg-yellow-50 border-2 border-yellow-200"
                            : "bg-gray-50"
                        }`}
                      >
                        <h4 className="font-semibold capitalize text-purple-600 flex items-center gap-2">
                          {ability.ability.name.replace("-", " ")}
                          {ability.is_hidden && (
                            <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full">
                              Hidden
                            </span>
                          )}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/*-----------------------------sprite------------------------------ */}
              <div className="flex flex-col items-center justify-center">
                <div
                  className={`relative bg-gradient-to-br ${typeColors[primaryType]} rounded-full p-8 shadow-xl mb-6`}
                >
                  <div className="absolute inset-4 border-4 border-white/30 rounded-full"></div>
                  <div className="absolute inset-8 border-2 border-white/20 rounded-full"></div>

                  <img
                    src={getCurrentSprite()}
                    alt={pokemon.name}
                    className="w-48 h-48 object-contain drop-shadow-2xl relative z-10"
                  />

                  {isShiny && (
                    <div className="absolute top-4 right-4 text-yellow-300 text-2xl animate-pulse">
                      ✨
                    </div>
                  )}
                </div>

                {/* ---------------------buttons-------------------- */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setIsShiny(!isShiny)}
                    className={`px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                      isShiny
                        ? "bg-yellow-400 text-yellow-900"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    ✨ Sparkle Sprite
                  </button>
                  <button
                    onClick={() => playCry("latest")}
                    className="bg-green-600 cursor-pointer text-white px-3 py-2 items-center flex gap-2 rounded-lg text-sm hover:bg-green-500 transition-colors"
                  >
                    <HiOutlineSpeakerWave /> Scream
                  </button>
                </div>
              </div>
            </div>
          )}

          {/*--------------------sprites part---------------------------*/}
          <SpritesTab pokemon={pokemon} currentTab={currentTab} />

          {/* ---------------------moves-------------------------------- */}
          <MovesTab pokemon={pokemon} currentTab={currentTab} />

          {/* -----------------------info tab----------------------------- */}
          <InfoTab pokemon={pokemon} currentTab={currentTab} />
        </div>

        {/* --------------------------bottom tab--------------------------*/}
        <BottomNav playCry={playCry} onBack={onBack} />
        {/* --------------------------MenuBar---------------- */}
        <div className=" sticky bg-white bottom-0 z-10 w-full">
          <MenuBar
            pokemon={pokemon}
            onBack={onBack}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </div>
      </div>
    </div>
  );
};
/* --------------------------bottom tab-----------------------------*/

const BottomNav = ({ playCry, onBack }) => {
  return (
    <div className="flex justify-center py-4 gap-2">
      <button
        onClick={() => playCry("latest")}
        className="bg-green-600 cursor-pointer text-white px-3 py-2 items-end flex gap-2 rounded-lg text-sm hover:bg-green-500 transition-colors"
      >
        <HiOutlineSpeakerWave /> Latest Cry
      </button>
      <button
        onClick={() => playCry("legacy")}
        className="bg-blue-600 cursor-pointer text-white px-3 py-2 items-center flex gap-2 rounded-lg text-sm hover:bg-blue-500 transition-colors"
      >
        <BsSoundwave /> Legacy Cry
      </button>
      <button
        onClick={onBack}
        className="bg-red-600 cursor-pointer text-white px-3 py-2 items-center flex gap-2 rounded-lg text-sm hover:bg-red-500 transition-colors"
      >
        <IoMdArrowBack /> Go Back
      </button>
    </div>
  );
};

/**
 * 
// Mock Pokemon data with real API structure------------------------------
const mockPokemon = {
  name: "charizard",
  id: 6,
  height: 17,
  weight: 905,
  base_experience: 267,
  abilities: [
    {
      ability: { name: "blaze", url: "https://pokeapi.co/api/v2/ability/66/" },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "solar-power",
        url: "https://pokeapi.co/api/v2/ability/94/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  cries: {
    latest:
      "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg",
    legacy:
      "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/6.ogg",
  },
  forms: [
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon-form/6/" },
  ],
  location_area_encounters: "https://pokeapi.co/api/v2/pokemon/6/encounters",
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
      },
      "official-artwork": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      },
      showdown: {
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/6.gif",
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/6.gif",
      },
    },
  },
  types: [{ type: { name: "fire" } }, { type: { name: "flying" } }],
  stats: [
    { stat: { name: "hp" }, base_stat: 78 },
    { stat: { name: "attack" }, base_stat: 84 },
    { stat: { name: "defense" }, base_stat: 78 },
    { stat: { name: "special-attack" }, base_stat: 109 },
    { stat: { name: "special-defense" }, base_stat: 85 },
    { stat: { name: "speed" }, base_stat: 100 },
  ],
  moves: [
    { move: { name: "mega-punch", url: "https://pokeapi.co/api/v2/move/5/" } },
    { move: { name: "fire-punch", url: "https://pokeapi.co/api/v2/move/7/" } },
    {
      move: { name: "thunder-punch", url: "https://pokeapi.co/api/v2/move/9/" },
    },
    { move: { name: "scratch", url: "https://pokeapi.co/api/v2/move/10/" } },
  ],
};
 */
