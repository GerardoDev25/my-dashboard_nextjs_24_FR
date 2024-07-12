import { PokemonsResponse, SimplePokemon, PokemonGrid } from '@/pokemons';

export const metadata = {
  title: 'Favorites',
  description: 'List of favorite pokemons',
};


const PokemonPage = async () => {
  return (
    <>
      <div className='flex flex-col'>
        <span className='text-5xl my-2'>
          Pokemon favorites <small className='text-blue-500'>Global State</small>
        </span>
        <PokemonGrid pokemons={[]} />
      </div>
    </>
  );
};

export default PokemonPage;
