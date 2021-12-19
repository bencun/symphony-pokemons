import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Pokemon } from '../services/PokemonsAPI';
import { PokemonCard } from './PokemonCard';
import styles from './PokemonList.module.scss';

interface IPokemonListProps {
  pokemons: Pokemon[];
}

export const PokemonList: React.FC<IPokemonListProps> = ({ pokemons }) => {
  return (
    <div className={`${styles.root} padded-container`}>
      {pokemons
        ? pokemons.map((p) => (
            <Link key={p.name} href={`/pokemon/${p.name}`}>
              <a className="full-width-inline">
                <PokemonCard pokemon={p} />
              </a>
            </Link>
          ))
        : null}
    </div>
  );
};
