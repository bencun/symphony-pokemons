
import Image from 'next/image';
import React from 'react';
import { Pokemon } from '../services/PokemonsAPI';

interface IPokemonListProps {
  pokemons: Pokemon[];
}

export const PokemonList: React.FC<IPokemonListProps> = ({pokemons}) => {

  return (
    <div>
      Pokemons list:
      {
        pokemons ? pokemons.map(p => (
          <div key={p.name}>
            <div>
              {p.sprites.front_default && <Image src={p.sprites.front_default} alt={p.name} width={128} height={128}></Image>}
            </div>
            <div >{p.name.toUpperCase()}</div>
          </div>
        )) : null
      }
    </div>
  );
};
