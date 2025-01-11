import React from "react";
import pokemontitle from "../assets/pokemontitle.png";
import { useEffect } from "react";
import "../app.css";

const Navbar = () => {
  useEffect(() => {
    const title = document.getElementById("title");

    setTimeout(() => {
      title.classList.add("aniroundMotion");
    }, 2000);
  }, []);
  return (
    <div className="flex justify-center items-center ">
      <div className="relative w-full h-14 bg-red-500 flex justify-center items-center">
        <img
          id="title"
          src={pokemontitle}
          alt="rotating"
          className="absolute w-36 h-36"
        />
      </div>
    </div>
  );
};

export default Navbar;
