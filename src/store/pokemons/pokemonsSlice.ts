import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  '1': { id: '1', name: 'bulbasaur' },
  '4': { id: '4', name: 'charmander' },
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
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;