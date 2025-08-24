import React from "react";
import pokeDex from "../../assets/ui/main.png";

const MainBg = ({ children }) => {
  return (
    <div className=" h-screen  w-screen flex flex-col justify-between ">
      <img
        src={pokeDex}
        className="h-[130px] w-full object-cover object-top   -z-10"
        alt="Pikachu"
      />
      {children}

      <img
        src={pokeDex}
        className="h-[85px] w-full object-cover object-bottom   -z-10"
        alt="Pikachu"
      />
    </div>
  );
};

export default MainBg;
