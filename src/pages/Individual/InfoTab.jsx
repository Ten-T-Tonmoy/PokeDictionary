import React from "react";

const InfoTab = ({ currentTab, pokemon }) => {
  return (
    <div>
      {currentTab === "info" && (
        <div className="grid grid-cols-1 text-gray-500 gap-6 mb-30">
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-gray-700 mb-3">General Info</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">ID:</span> #{pokemon.id}
              </p>
              <p>
                <span className="font-semibold">Name:</span> {pokemon.name}
              </p>
              <p>
                <span className="font-semibold">Height:</span>{" "}
                {(pokemon.height / 10).toFixed(1)}m
              </p>
              <p>
                <span className="font-semibold">Weight:</span>{" "}
                {(pokemon.weight / 10).toFixed(1)}kg
              </p>
              <p>
                <span className="font-semibold">Base Experience:</span>{" "}
                {pokemon.base_experience}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h3 className="font-bold text-gray-700 mb-3">Forms</h3>
            <div className="space-y-2">
              {pokemon.forms?.map((form, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-2">
                  <span className="capitalize">{form.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoTab;

// location_area_encounters =>url
const LocationEncounters = () => {
  return <div>kisu na</div>;
};
/**
 * future upgrade
 *
 * add available regions ?
 * routes?
 */
