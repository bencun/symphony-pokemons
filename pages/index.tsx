import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { Pokemon, PokemonsAPI } from '../services/PokemonsAPI';

interface IHomeProps {
  pokemons: Pokemon[];
}

export const Home: React.FC<IHomeProps> = ({pokemons}) => {

  const pokemonList = pokemons ? pokemons.map(p => (
    <div key={p.name}>
      <div>
        {p.sprites.front_default && <Image src={p.sprites.front_default} alt={p.name} width={128} height={128}></Image>}
      </div>
      <div >{p.name}</div>
    </div>
  )) : null;

  return (
    <div>
      Pokemons list:
      {pokemonList}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<IHomeProps> = async (context) => {
  const pokemons = await PokemonsAPI.getAll();
  return {
    props: {
      pokemons,
    }
  };
};
