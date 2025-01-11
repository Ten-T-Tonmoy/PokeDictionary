import React from "react";
import { useEffect } from "react";
import collectionChibi from "../assets/collectionChibi.png";
import "../app.css";
const Opening = () => {
  useEffect(() => {
    const splash = document.getElementById("splash");

    setTimeout(() => {
      splash.classList.add("hidden");
    }, 2000);
  }, []);
  return (
    <div id="splash" className="relative h-screen bg-red-500">
      <div className="absolute flex justify-center items-center z-50 anifadeIn">
        <img
          src={collectionChibi}
          alt="Splash"
          className="
            aniimagePop"
        />
      </div>
    </div>
  );
};

export default Opening;
