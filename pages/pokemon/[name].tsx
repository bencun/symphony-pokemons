import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Pokemon, PokemonsAPI } from '../../services/PokemonsAPI';
import { PokemonCard } from '../../components/PokemonCard';
import { CustomTitle } from '../../components/CustomTitle';

interface IPokemonProps {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<IPokemonProps> = (props) => {
  return (
    <>
      <CustomTitle title={`Pokemon: ${props.pokemon.name}`}/>
      <PokemonCard pokemon={props.pokemon}/>
    </>
    );
};

export const getServerSideProps: GetServerSideProps<IPokemonProps> = async (context) => {
  const name = context.params?.name as string;
  const pokemon = await PokemonsAPI.getOne(name);
  return {props: {pokemon}};
};

export default PokemonPage;
