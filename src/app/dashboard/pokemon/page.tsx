import { PokemonsResponse, SimplePokemon, PokemonGrid } from '@/app/pokemons';

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
          Pokemon List <small>static</small>
        </span>
        <PokemonGrid pokemons={pokemons} />
      </div>
    </>
  );
};

export default PokemonPage;
