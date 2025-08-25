import React from "react";

const MovesTab = ({ currentTab, pokemon }) => {
  return (
    <div>
      {currentTab === "moves" && (
        <div className=" rounded-lg p-4">
          <h3 className="font-bold text-gray-700 mb-4">
            Moves ({pokemon.moves?.length || 0})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
            {pokemon.moves?.map((move, index) => (
              <div key={index} className="bg-white rounded-lg p-2 text-center">
                <span className="text-sm capitalize text-gray-500">
                  {move.move.name.replace("-", " ")}
                </span>
              </div>
            ))}
          </div>
          {pokemon.moves?.length > 20 && (
            <p className="text-center text-gray-500 text-sm mt-4">
              Showing all {pokemon.moves.length} moves .
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MovesTab;
