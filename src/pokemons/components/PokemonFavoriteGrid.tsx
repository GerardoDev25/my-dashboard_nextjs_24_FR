'use client';
import { useState } from 'react';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokemonCard } from './PokemonCard';
import { useAppSelector } from '@/store';
import { IoHeartOutline } from 'react-icons/io5';

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonFavoriteGrid = ({ pokemons }: Props) => {
  const storePokemons = useAppSelector((store) => store.pokemons);

  const pokemonsId = Object.keys(storePokemons);

  const pokemonsFavorites = pokemons.filter((pokemon) =>
    pokemonsId.includes(pokemon.id)
  );

  const [pokemonsState, setPokemonsState] = useState(pokemonsFavorites);

  if (pokemonsState.length === 0) {
    return <NotFavorites />;
  }

  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
      {pokemonsState.map((pokemon) => (
        <PokemonCard key={pokemon.id!} pokemon={pokemon} />
      ))}
    </div>
  );
};

const NotFavorites = () => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <IoHeartOutline size={100} className='text-red-500' />
      <span> No Favorites</span>
    </div>
  );
};
