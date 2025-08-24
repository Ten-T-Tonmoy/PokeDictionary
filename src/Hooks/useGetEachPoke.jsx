import { useState, useEffect } from "react";

export function useGetPokemons({ page = 1, limit = 20 }) {
  const [allpokemons, setAllpokemons] = useState([]);
  const [loading, setLoading] = useState(false);

/**
 * "https://pokeapi.co/api/v2/pokemon/103/"
 * contains=>
 * 
 * name: yep the name
 * abilities []  array of 
 *        => ability.name ,ability.url, is_hidden,slot
 * base_experience
 * cries.latest ,cries.legacy
 * forms [] array of 
 *         => name,url
 * height:
 * id:
 * location_area_encounters: gives url
 * sprites: back_defaults ,back_female,back_shiny,back_shiny_male,front_default,front_shiny,front_shiny_female
 * other: 
 *        => dream_world.front_default, showdown.back_default
 * 
 * 
 * --------------------------combat-------------------------
 * move : 
 *      => move: {name,url}
 * 
 * 
 * 
 * 
 * 
 */

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        setLoading(false);
        const offset = (page - 1) * limit;
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        /**
         * results
         * ------- name,url
         */
        const res = await fetch(url);
        const data=await res.json();


        const  urls=data.results.map((item)=>item.url);
        const pokemons=urls.map(())
      } catch (err) {
        console.error("Error fetching pokemons:", err);


      } finally {
        setLoading(false);
      }
    };
  }, [limit, page]);
}


