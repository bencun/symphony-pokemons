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
    <div className="flex-centered" style={{width: '480px', height: '100vh'}}>
      <CustomTitle title={`Pokemon: ${props.pokemon.name}`}/>
      <PokemonCard pokemon={props.pokemon} showDetails/>
    </div>
    );
};

export const getServerSideProps: GetServerSideProps<IPokemonProps> = async (context) => {
  const name = context.params?.name as string;
  try {
    const pokemon = await PokemonsAPI.getOne(name);
    return {props: {pokemon}};
  } catch(e) {
    return {notFound: true};
  }
};

export default PokemonPage;
