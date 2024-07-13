import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialStateLS = (): PokemonsState => {
//   // if (typeof localStorage === 'undefined') return {};
//   const data = JSON.parse(localStorage.getItem('pokemons-favorites') || '{}');
//   return data;
// };

const initialState: PokemonsState = {
  // ...getInitialStateLS(),
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons: (
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) => {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const id = pokemon.id;
      if (!!state.favorites[id]) delete state.favorites[id];
      else state.favorites[id] = pokemon;

      localStorage.setItem(
        'pokemons-favorites',
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
