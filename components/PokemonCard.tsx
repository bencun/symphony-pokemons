import Image from 'next/image';
import React from 'react';
import { Pokemon } from '../services/PokemonsAPI';

interface IPokemonCardProps {
  pokemon: Pokemon
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({pokemon}) => {
  return (
    <div>
      <div>
        {pokemon.sprites.front_default &&
        <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={128} height={128}></Image>}
      </div>
      <div >{pokemon.name.toUpperCase()}</div>
    </div>
  );
};
