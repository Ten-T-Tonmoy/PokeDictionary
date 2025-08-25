import React from "react";

const MenuBar = ({ onBack, setCurrentTab, currentTab, pokemon }) => {
  return (
    <>
      {/* -------------------------name ------------------------- */}
      <div className="flex items-center bg-red-400 w-full text-white justify-between px-6">
        <h1 className="text-xl font-bold capitalize">{pokemon.name}</h1>
        <p className="text-sm opacity-90">
          #{pokemon.id.toString().padStart(3, "0")}
        </p>
      </div>
      {/* --------------------menu bar----------------------------------- */}
      <div className="bg-red-500 p-4  flex items-center justify-between w-full">
        <div className="flex items-center w-full justify-center gap-1">
          {/* --go back button---- */}

          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer
       text-white   flex  justify-center  font-medium text-2xl 
       hover:bg-white hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &#8249;
          </button>

          {["stats", "sprites", "moves", "info"].map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors
                cursor-pointer capitalize ${
                  currentTab === tab
                    ? "bg-white text-red-500"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuBar;
