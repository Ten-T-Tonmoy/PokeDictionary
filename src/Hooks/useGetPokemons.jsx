import { useState, useEffect } from "react";

export function useGetPokemons({ page = 1, limit = 20 }) {
  const [allPokemons, setAllpokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        setLoading(false);
        const offset = (page - 1) * limit;
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        /**
         * results
         * ------- name,url
         */
        const res = await fetch(url);
        const data = await res.json();
        const urls = data.results.map((item) => item.url);
        const pokemons = await Promise.all(
          urls.map(async (item) => {
            const res = await fetch(item);
            return res.json();
          })
        );
        setAllpokemons(pokemons);
        // console.log("Fetched data:", pokemons);
      } catch (err) {
        console.error("Error fetching pokemons:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllPokemons();
  }, [limit, page]);

  return { allPokemons, loading };
}
