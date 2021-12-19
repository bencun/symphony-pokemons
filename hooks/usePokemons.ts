import { useEffect, useState } from 'react';
import { Pokemon, PokemonsAPI } from '../services/PokemonsAPI';

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  useEffect(() => {
    const load = async () => setPokemons(await PokemonsAPI.getAll());
    load();
  }, []);

  return pokemons;
};
