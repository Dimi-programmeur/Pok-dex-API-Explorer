import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [pokemonName, setPokemonName] = useState([]);

  const fetchApi = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    console.log(res.data.results);
    const name_url = res.data.results;

    const names = name_url.map((n) => axios.get(n.url));
    const result = await Promise.all(names);
    console.log(result);
    const datas = result.map((r) => r.data);
    console.log(datas);

    setPokemonName(datas);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-6">
      <h1 className="text-center font-extrabold text-5xl md:text-6xl mb-12 bg-gradient-to-r from-yellow-300 via-red-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-wider">
        Pokédex
      </h1>

      <div className="flex flex-wrap justify-center items-stretch gap-8 max-w-full mx-auto">
        {pokemonName.map((p) => (
          <div
            key={p.id}
            className="w-full sm:w-80 md:w-96 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-105 hover:bg-white/10 hover:border-yellow-400/50 hover:shadow-yellow-400/20 transition-all duration-300 cursor-pointer flex flex-col items-center"
          >
            {/* Image */}
            <div className="w-56 h-56 flex items-center justify-center bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-full mb-6 border border-white/10">
              <img
                src={p.sprites.front_default}
                alt={p.name}
                className="w-48 h-48 object-contain drop-shadow-2xl"
              />
            </div>

            {/* Nom */}
            <p className="text-3xl font-bold text-white capitalize mb-5 tracking-wide">
              {p.name}
            </p>

            {/* Infos */}
            <div className="w-full space-y-3 text-base">
              <div className="flex justify-between bg-black/30 rounded-xl px-4 py-2.5">
                <span className="text-blue-300 font-medium">Taille</span>
                <span className="text-white font-semibold">{p.height}</span>
              </div>
              <div className="flex justify-between bg-black/30 rounded-xl px-4 py-2.5">
                <span className="text-pink-300 font-medium">Poids</span>
                <span className="text-white font-semibold">{p.weight}</span>
              </div>
              <div className="flex justify-between bg-black/30 rounded-xl px-4 py-2.5">
                <span className="text-yellow-300 font-medium">XP Base</span>
                <span className="text-white font-semibold">
                  {p.base_experience ?? "—"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
