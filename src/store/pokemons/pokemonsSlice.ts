import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const getInitialStateLS = (): PokemonsState => {
  if (typeof localStorage === 'undefined') return {};
  const data = JSON.parse(localStorage.getItem('pokemons-favorites') || '{}');
  return data;
};

const initialState: PokemonsState = {
  ...getInitialStateLS(),

  // '1': { id: '1', name: 'bulbasaur' },
  // '4': { id: '4', name: 'charmander' },
  // '7': { id: '7', name: 'squirtle' },
  // '25': { id: '25', name: 'pikachu' },
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const id = pokemon.id;
      if (!!state[id]) delete state[id];
      else state[id] = pokemon;

      localStorage.setItem('pokemons-favorites', JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
