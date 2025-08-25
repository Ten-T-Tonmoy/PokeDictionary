import React from "react";

const SpritesTab = ({ currentTab, pokemon }) => {
  return (
    <div>
      {currentTab === "sprites" && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                key: "front_default",
                label: "Front",
                src: pokemon.sprites.front_default,
              },
              {
                key: "back_default",
                label: "Back",
                src: pokemon.sprites.back_default,
              },
              {
                key: "front_shiny",
                label: "Shiny Front",
                src: pokemon.sprites.front_shiny,
              },
              {
                key: "back_shiny",
                label: "Shiny Back",
                src: pokemon.sprites.back_shiny,
              },
            ].map(
              (sprite, index) =>
                sprite.src && (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 text-center"
                  >
                    <img
                      src={sprite.src}
                      alt={sprite.label}
                      className="w-24 h-24 mx-auto mb-2"
                    />
                    <p className="text-sm font-medium">{sprite.label}</p>
                  </div>
                )
            )}
          </div>

          {/* Other Sprites */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pokemon.sprites.other?.["official-artwork"]?.front_default && (
              <div className="bg-white rounded-lg p-4 text-center">
                <img
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt="Official Art"
                  className="w-32 h-32 mx-auto mb-2"
                />
                <p className="text-sm font-medium">Official Artwork</p>
              </div>
            )}
            {pokemon.sprites.other?.dream_world?.front_default && (
              <div className="bg-white rounded-lg p-4 text-center">
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt="Dream World"
                  className="w-32 h-32 mx-auto mb-2"
                />
                <p className="text-sm font-medium">Dream World</p>
              </div>
            )}
            {pokemon.sprites.other?.showdown?.front_default && (
              <div className="bg-white rounded-lg p-4 text-center">
                <img
                  src={pokemon.sprites.other.showdown.front_default}
                  alt="Showdown"
                  className="w-32 h-32 mx-auto mb-2"
                />
                <p className="text-sm font-medium">Showdown</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpritesTab;
