import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { EachPokemonContext } from "../../context/EachPokemonContext";
import { Link } from "react-router-dom";

//for fetching all pokes and making cards of them
const PokeCards = ({ allpoke }) => {
  // const typeColors = {
  //   normal: "bg-gray-400",
  //   fire: "bg-red-500",
  //   water: "bg-blue-500",
  //   grass: "bg-green-500",
  //   electric: "bg-yellow-400",
  //   ice: "bg-cyan-400",
  //   fighting: "bg-orange-600",
  //   poison: "bg-purple-500",
  //   ground: "bg-yellow-600",
  //   flying: "bg-indigo-400",
  //   psychic: "bg-pink-500",
  //   bug: "bg-lime-500",
  //   rock: "bg-stone-500",
  //   ghost: "bg-indigo-800",
  //   dragon: "bg-purple-700",
  //   dark: "bg-gray-800",
  //   steel: "bg-slate-400",
  //   fairy: "bg-pink-300",
  // };

  const typeColors = {
    normal: "bg-gradient-to-br from-stone-300 to-stone-400",
    fire: "bg-gradient-to-br from-orange-400 via-red-500 to-red-600",
    water: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
    grass: "bg-gradient-to-br from-green-400 via-emerald-500 to-green-600",
    electric: "bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500",
    ice: "bg-gradient-to-br from-cyan-200 via-cyan-400 to-blue-400",
    fighting: "bg-gradient-to-br from-red-600 via-orange-600 to-red-700",
    poison: "bg-gradient-to-br from-purple-400 via-violet-500 to-purple-600",
    ground: "bg-gradient-to-br from-amber-400 via-orange-500 to-yellow-600",
    flying: "bg-gradient-to-br from-sky-300 via-indigo-400 to-blue-500",
    psychic: "bg-gradient-to-br from-pink-400 via-rose-500 to-pink-600",
    bug: "bg-gradient-to-br from-lime-400 via-green-500 to-emerald-500",
    rock: "bg-gradient-to-br from-stone-400 via-amber-600 to-orange-700",
    ghost: "bg-gradient-to-br from-indigo-600 via-purple-700 to-indigo-900",
    dragon: "bg-gradient-to-br from-indigo-500 via-purple-600 to-violet-700",
    dark: "bg-gradient-to-br from-gray-700 via-slate-800 to-gray-900",
    steel: "bg-gradient-to-br from-slate-300 via-gray-400 to-slate-500",
    fairy: "bg-gradient-to-br from-pink-200 via-rose-300 to-pink-400",
  };

  const typeBadgeColors = {
    normal: "bg-stone-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-400",
    ice: "bg-cyan-400",
    fighting: "bg-orange-600",
    poison: "bg-purple-500",
    ground: "bg-yellow-600",
    flying: "bg-indigo-400",
    psychic: "bg-pink-500",
    bug: "bg-lime-500",
    rock: "bg-stone-500",
    ghost: "bg-indigo-800",
    dragon: "bg-purple-700",
    dark: "bg-gray-800",
    steel: "bg-slate-400",
    fairy: "bg-pink-300",
  };
  /**
   * types []
   *    => type.name,type.url
   */
  const { setPokemon } = useContext(EachPokemonContext);

  function showpoke(idx) {
    setPokemon(allpoke[idx]);
  }

  return (
    <>
      <div
        className="grid grid-cols-1 gap-4 justify-center 
     p-4"
      >
        {allpoke.map((pokemon, idx) => (
          <Link to={`/pokemon/${pokemon.name}`}>
            <div
              key={idx}
              onClick={() => showpoke(idx)}
              className={`relative group cursor-pointer rounded-2xl p-1 bg-gradient-to-br ${
                pokemon.types[0].type.name === "normal"
                  ? typeColors[pokemon.types[1]?.type.name]
                  : typeColors[pokemon.types[0].type.name] ||
                    "from-stone-300 to-stone-400"
              } shadow-xl hover:shadow-2xl transform
            transition-all duration-300 `}
            >
              {/* ---------------card contents---------------- */}

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 h-full">
                <div className="text-right text-sm font-mono text-gray-500 mb-2">
                  #{pokemon.id.toString().padStart(3, "0")}
                </div>

                {/* --------------image---------------------- */}
                <div className="relative mb-4 flex justify-center">
                  <div className="bg-gradient-to-br from-white/50 to-white/20 rounded-full p-4 shadow-inner">
                    <img
                      loading="lazy"
                      src={pokemon.sprites.other["home"].front_default}
                      alt={pokemon.name}
                      className="w-24 h-24 group-hover:scale-150 scale-125 transition-transform
                    duration-300 filter drop-shadow-lg"
                    />
                  </div>
                </div>
                {/*               can use others tho 
              <div className="relative mb-4 flex justify-center">
              <div className="bg-gradient-to-br from-white/50 to-white/20 rounded-full p-4 shadow-inner">
              <img
              loading="lazy"
              src={
                pokemon.sprites.other["official-artwork"].front_default
                }
                alt={pokemon.name}
                className="w-24 h-24 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
                  />
                </div>
              </div> */}
                <h3 className="text-xl font-bold text-gray-800 text-center mb-3 capitalize">
                  {pokemon.name}
                </h3>

                {/* types */}
                <div className="flex justify-center gap-2 mb-4">
                  {pokemon.types.map((type, typeIdx) => (
                    <span
                      key={typeIdx}
                      className={`px-3 py-1 rounded-full text-xs font-semibold capitalize text-white shadow-md ${
                        typeBadgeColors[type.type.name] || "bg-gray-400"
                      }`}
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>

                {/* -------------------stats---------------------- */}

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-red-100 rounded-lg p-2">
                    <div className="font-bold text-red-600">HP</div>
                    <div className="text-gray-700">
                      {pokemon.stats[0]?.base_stat || "N/A"}
                    </div>
                  </div>
                  <div className="bg-orange-100 rounded-lg p-2">
                    <div className="font-bold text-orange-600">ATK</div>
                    <div className="text-gray-700">
                      {pokemon.stats[1]?.base_stat || "N/A"}
                    </div>
                  </div>
                  <div className="bg-blue-100 rounded-lg p-2">
                    <div className="font-bold text-blue-600">DEF</div>
                    <div className="text-gray-700">
                      {pokemon.stats[2]?.base_stat || "N/A"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PokeCards;

// const pokeCardsPrev = () => {
//   return (
//     <div>
//       {allpoke.map((item, idx) => (
//         <div
//           onClick={() => showpoke(idx)}
//           key={idx}
//           className={`m-4 text-center p-4 cursor-pointer
//         rounded-lg  mx-auto
//         ${typeColors[item.types[0].type.name] || "bg-gray-300"}
//         `}
//         >
//           <h1 className="font-mono text-white text-[1.5rem]">{item.name}</h1>
//           <img
//             src={item.sprites.front_default}
//             className="w-32 h-32 hover:scale-[130%] transition-transform duration-200"
//             alt={item.name}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };
