import { PokemonsResponse, SimplePokemon } from '@/app/pokemons';
import Image from 'next/image';

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
        <div className='flex flex-wrap gap-10 items-center justify-center'>
          {pokemons.map((pokemon) => (
            <Image
              key={pokemon.id}
              width={100}
              height={100}
              alt='pokemon'
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonPage;
