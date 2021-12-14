import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { PokemonList } from '../components/PokemonList';
import { usePokemons } from '../hooks/usePokemons';
import { Pokemon, PokemonsAPI } from '../services/PokemonsAPI';

interface IHomeProps {
  pokemons: Pokemon[];
}

export const HomeCSR: NextPage<IHomeProps> = () => {
  const pokemons = usePokemons();
  return pokemons ? <PokemonList pokemons={pokemons}/> : <div>Loading...</div>;
};

export const HomeSSR: NextPage<IHomeProps> = ({pokemons}) => <PokemonList pokemons={pokemons}/>;

export const getServerSideProps: GetServerSideProps<IHomeProps> = async (context) => {
  const pokemons = await PokemonsAPI.getAll();
  return {
    props: {
      pokemons,
    }
  };
};

export default HomeSSR;
