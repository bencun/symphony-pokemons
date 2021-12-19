import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import { CustomTitle } from '../../components/CustomTitle';
import { PokemonCard } from '../../components/PokemonCard';
import { Pokemon, PokemonsAPI } from '../../services/PokemonsAPI';

interface IPokemonProps {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<IPokemonProps> = (props) => {
  return (
    <div className="flex-centered padded-container full-height">
      <CustomTitle title={`Pokemon: ${props.pokemon.name}`} />
      <PokemonCard pokemon={props.pokemon} showDetails />
    </div>
  );
};

/* export const getServerSideProps: GetServerSideProps<IPokemonProps> = async (
  context
) => {
  const name = context.params?.name as string;
  try {
    const pokemon = await PokemonsAPI.getOne(name);
    return { props: { pokemon } };
  } catch (e) {
    return { notFound: true };
  }
}; */
export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons = await PokemonsAPI.getAll();
  const paths = pokemons.map((p) => ({ params: { name: p.name } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPokemonProps> = async ({
  params,
}) => {
  if (params && params.name) {
    try {
      const pokemon = await PokemonsAPI.getOne(params.name as string);
      return { props: { pokemon } };
    } catch (e) {
      // 404 if pokemon not found by name
      return { notFound: true };
    }
  }
  // 404 if params are invalid
  return { notFound: true };
};

export default PokemonPage;
