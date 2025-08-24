import React from "react";
import pokeDex from "../../assets/ui/main.png";
import pokeBall from "../../assets/pokeball.png";

const MainBg = ({ children }) => {
  return (
    <div className=" h-screen  w-screen flex flex-col justify-between ">
      <div className="relative w-full">
        <img
          src={pokeDex}
          className="h-[130px] w-full object-cover object-top   -z-10"
          alt="Pikachu"
        />
        <img
          src={pokeBall}
          className="h-14 absolute rotate-45 bg-white rounded-full
          right-6 top-18"
          alt=""
        />
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
