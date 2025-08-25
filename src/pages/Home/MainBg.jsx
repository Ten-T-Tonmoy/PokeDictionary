import React from "react";
import pokeDex from "../../assets/ui/mainhead.png";
import pokeBall from "../../assets/pokeball.png";

const MainBg = ({ children }) => {
  return (
    <div className=" h-screen  w-screen flex flex-col justify-between ">
      <div className="relative w-full">
        <img
          src={pokeDex}
          className="h-full w-full object-cover object-top   -z-10"
          alt="Pikachu"
        />
        <img
          src={pokeBall}
          className="h-14 absolute rotate-45 bg-white rounded-full
          right-6 top-1"
          alt=""
        />
        <h1 className="text-4xl font-bold text-black top-14 left-26  absolute">
          Pokédex
        </h1>
      </div>

      {children}
      <div className="h-0"></div>

      {/* <img
        src={pokeDex}
        className="h-[85px] w-full object-cover object-bottom   -z-10"
        alt="Pikachu"
      /> */}
    </div>
  );
};

export default MainBg;
