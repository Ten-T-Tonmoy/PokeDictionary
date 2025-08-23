import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
//for fetching all pokes and making cards of them
const PokeCards = () => {
  const [allpoke, setAllpoke] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  useEffect(() => {
    //.then chaining is what gentlemens do
    axios.get(url).then((res) => {
      const Urls = res.data.results.map((perValue) => perValue.url);
      const pokemons = Urls.map((per) =>
        axios.get(per).then((res) => res.data)
      );
      //damn making new arrays with mapping
      Promise.all(pokemons).then((res) => {
        setAllpoke(res);
      });
      console.log(allpoke);
    });
  }, []);
  function showpoke(idx) {}
  return (
    <>
      <div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center 
    bg-gradient-to-r from-red-500 to-yellow-500 p-4"
      >
        {allpoke.map((item, idx) => (
          <div
            onClick={() => showpoke(idx)}
            key={idx}
            className="m-4 text-center p-4 cursor-pointer 
        rounded-lg bg-white mx-auto"
          >
            <h1 className="font-mono text-red-400 text-[1.5rem]">
              {item.name}
            </h1>
            <img
              src={item.sprites.front_default}
              className="w-32 h-32 hover:scale-[130%] transition-transform duration-200"
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PokeCards;
