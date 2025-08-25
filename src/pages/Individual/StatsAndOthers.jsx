import React from "react";

const StatsAndOthers = ({
  totalStats,
  pokemon,
  formatStatName,
  typeColors,
}) => {
  return (
    <div className="space-y-4">
      {/* ------------------base Stats-------------------------- */}
      <div className="bg-white rounded-lg p-4">
        <h3 className="font-bold text-gray-700 mb-3 flex justify-between">
          Base Stats
          <span className=" font-normal">Total: {totalStats}</span>
        </h3>
        {pokemon.stats.map((stat, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b
             border-gray-200 last:border-b-0"
          >
            <div className="font-semibold text-gray-700 w-20">
              {formatStatName(stat.stat.name)}
            </div>
            <div className="flex items-center gap-3 w-full">
              {/* meter  */}
              <div className="flex-1 bg-gray-200 rounded-full h-2 ">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${
                    stat.base_stat >= 100
                      ? "from-green-400 to-green-600"
                      : stat.base_stat >= 70
                      ? "from-yellow-400 to-yellow-600"
                      : "from-red-400 to-red-600"
                  }`}
                  style={{
                    width: `${Math.min((stat.base_stat / 150) * 100, 100)}%`,
                  }}
                ></div>
              </div>
              <div className="font-mono text-gray-800 w-6 text-right">
                {stat.base_stat}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --------------------------type & physical--------------------------------*/}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 ">
          <h3 className="font-bold text-gray-700 mb-3">Type</h3>
          <div className="flex flex-col gap-2">
            {pokemon.types.map((type, index) => (
              <span
                key={index}
                className={`px-3 py-2  rounded-lg text-white text-center bg-gradient-to-r ${
                  typeColors[type.type.name]
                }`}
              >
                {type.type.name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white text-gray-500 rounded-lg p-4">
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

      {/*-------------------------------abilities----------------------------*/}
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
                  <span
                    className="text-xs ml-auto bg-yellow-400 text-yellow-900
                   px-2 py-1 rounded-full"
                  >
                    Hidden
                  </span>
                )}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsAndOthers;
