import _Pokedex, {Pokemon as PokedexPokemon} from 'pokedex-promise-v2';

export type Pokemon = {
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
  }
}

const Pokedex = new _Pokedex();

export const PokemonsAPI = {
  async getAll(offset: number = 0): Promise<Pokemon[]> {
    const pokemonList = await Pokedex.getPokemonsList({offset, limit: 10});
    const pokemons: Pokemon[] = [];
    for (const p of pokemonList.results) {
      const {name, base_experience, height, weight, abilities, sprites: {front_default} } =
        await Pokedex.getPokemonByName(p.name) as PokedexPokemon;
      // grab only the data we need
      pokemons.push({
        name, base_experience, height, weight, sprites: {front_default}
      });
    }
    return pokemons;
  },
  async getOne(pokemonName: string): Promise<Pokemon> {
    const {name, base_experience, height, weight, sprites: {front_default}} = await Pokedex.getPokemonByName(pokemonName) as PokedexPokemon;
    return {name, base_experience, height, weight, sprites: {front_default}};
  }
};
