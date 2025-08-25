import React from "react";

const MovesTab = ({ currentTab, pokemon }) => {
  return (
    <div>
      {currentTab === "moves" && (
        <div className="bg-white rounded-lg p-4">
          <h3 className="font-bold text-gray-700 mb-4">
            Moves ({pokemon.moves?.length || 0})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-96 overflow-y-auto">
            {pokemon.moves?.slice(0, 20).map((move, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-2 text-center"
              >
                <span className="text-sm capitalize">
                  {move.move.name.replace("-", " ")}
                </span>
              </div>
            ))}
          </div>
          {pokemon.moves?.length > 20 && (
            <p className="text-center text-gray-500 text-sm mt-4">
              Showing first 20 of {pokemon.moves.length} moves
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MovesTab;
