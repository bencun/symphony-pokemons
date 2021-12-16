import Image from 'next/image';
import React from 'react';
import { Pokemon } from '../services/PokemonsAPI';
import styles from './PokemonCard.module.scss';

interface IPokemonCardProps {
  pokemon: Pokemon,
  showDetails?: boolean
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({pokemon, showDetails}) => {

  const propsToList: {[x in keyof Pokemon]?: string} = {
    base_experience: 'Base Experience',
    height: 'Height',
    weight: 'Weight'
  };

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        {pokemon.sprites.front_default &&
        <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={128} height={128}></Image>}
      </div>

      <div className={`${styles.details} ${showDetails ? styles.showDetails : ''}`}>
        <h2>{pokemon.name}</h2>

        {showDetails ? Object.keys(propsToList).map(pokeProp => (
          <div key={pokeProp}>
            <h3>{propsToList[pokeProp as keyof Pokemon]}</h3>
            <p>{pokemon[(pokeProp as keyof Pokemon)]}</p>
          </div>
        )) : null}
      </div>
    </div>
  );
};
