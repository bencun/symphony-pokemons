import { useEffect, useState } from 'react';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

type GetAllDTO = {
  count: number,
  next: string | null,
  previous: string | null,
  results: {
    name: string,
    url: string
  }[]
};

type PokemonDTO = {
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    },
  }[],
  sprites: {
    front_default: string;
  }
}

export type Pokemon = PokemonDTO;

export const PokemonsAPI = {
  async getAll(offset: number = 0): Promise<Pokemon[]> {
    const response = await fetch(API_URL);
    const body = await response.json() as GetAllDTO;

    const result: Pokemon[] = [];
    for (const p of body.results) {
      result.push({
        ...await PokemonsAPI.getOne(p.name),
      });
    }
    return result;
  },

  async getOne(name: string) {
    const response = await fetch(`${API_URL}/${name}`);
    const body = await response.json() as PokemonDTO;
    return body;
  }
};
