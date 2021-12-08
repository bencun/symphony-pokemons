import React from 'react';
import { Pokemon } from '../services/PokemonsAPI';

interface IPokemonListProps {
  pokemons: Pokemon[];
}

export const PokemonList: React.FC<IPokemonListProps> = ({pokemons}) => {

  return (
    <div>
      Pokemons list:
      {pokemons ? JSON.stringify(pokemons[0]) : ''}
    </div>
  );
};
