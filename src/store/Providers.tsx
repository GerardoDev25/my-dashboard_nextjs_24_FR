'use client';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '.';
import { setFavoritePokemons } from './pokemons/pokemonsSlice';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('pokemons-favorites') || '{}');

    store.dispatch(setFavoritePokemons(data));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
