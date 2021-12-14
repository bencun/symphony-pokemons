
import { useState, useEffect } from 'react';
import { PokemonsAPI, Pokemon } from '../services/PokemonsAPI';

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  useEffect(() => {
    const load = async () => setPokemons(await PokemonsAPI.getAll());
    load();
  }, []);

  return pokemons;
};
