import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

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
    });
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {allpoke.map((item, idx) => {
          return (
            <div key={idx} className="m-4 p-4 rounded-md bg-yellow-300">
              <h1>{item.name}</h1>
              <img
                src={item.sprites.front_default}
                className="w-32 h-32"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PokeCards;
