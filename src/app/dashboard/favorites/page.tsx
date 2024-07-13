import {
  PokemonFavoriteGrid,
  PokemonsResponse,
  SimplePokemon,
} from '@/pokemons';

export const metadata = {
  title: 'Favorites',
  description: 'List of favorite pokemons',
};

const getPokemon = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const req = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: PokemonsResponse = await req.json();

  const pokemons = data.results.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.url.split('/').at(-2)!,
  }));

  return pokemons;
};

const PokemonPage = async () => {
  const pokemons = await getPokemon(151);
  return (
    <>
      <div className='flex flex-col'>
        <span className='text-5xl my-2'>
          Pokemon favorites
          <small className='text-blue-500'>Global State</small>
        </span>
        <PokemonFavoriteGrid pokemons={pokemons} />
      </div>
    </>
  );
};

export default PokemonPage;
