import React from "react";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const StatsSprite = ({
  typeColors,
  getCurrentSprite,
  pokemon,
  isShiny,
  setIsShiny,
  playCry,
  primaryType,
}) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div
          className={`relative bg-gradient-to-br ${typeColors[primaryType]} rounded-full p-8 shadow-xl mb-6`}
        >
          <div className="absolute inset-1 border-4 border-white/30 rounded-full"></div>
          <div className="absolute inset-5 border-2 border-white/20 rounded-full"></div>

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
            ✨ Sparkle
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
  );
};

export default StatsSprite;
