import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useGetPokemons } from "../../Hooks/useGetPokemons";
import MainBg from "./MainBg";
import Pagination from "./Pagination";
import PokeCards from "./PokeCards";

const Home = () => {
  // const url = "https://pokeapi.co/api/v2/pokemon/103/";
  // const [poke, setPoke] = useState([]);
  // const getShit = async () => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setPoke(data);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   getShit();
  // }, []);
  const [page, setPage] = useState(65);
  //max page => 65
  const { allPokemons, loading } = useGetPokemons({ page: page, limit: 20 });
  console.log(allPokemons);

  return (
    <div>
      <MainBg>
        <div
          className="relative flex-1 overflow-y-scroll w-full text-black bg-white
        border-[15px] border-t-0 border-[#e00c2c]"
        >
          {/* ------------------all pokemon cards ---------------*/}

          <PokeCards allpoke={allPokemons} />
          {/* ------------pagination----------------- */}
          <div className=" sticky bg-white bottom-0 w-full">
            <Pagination page={page} setPage={setPage} />
          </div>
        </div>
      </MainBg>
    </div>
  );
};

export default Home;

//----------------------- background-----------------------------

// const FadeIn = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 4 }}
//     >
//       <h1>Simple fade in Framer-Motion</h1>
//     </motion.div>
//   );
// };

// const SlideIn = () => {
//   return (
//     <motion.div
//       initial={{ x: -500 }}
//       animate={{ x: 0 }}
//       transition={{ type: "spring", stiffness: 100, duration: 20 }}
//     >
//       <p>Sliding in from the left!</p>
//     </motion.div>
//   );
// };
