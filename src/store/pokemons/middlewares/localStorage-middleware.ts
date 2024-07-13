import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';

// export const localStorageMiddleware =
//   (state: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
//     next(action);

//     if (action.type === 'pokemons/toggleFavorite') {
//       const pokemons = state.getState().pokemons;

//       localStorage.setItem('pokemons-favorites', JSON.stringify(pokemons));
//     }
//     return '';
//   };

export const localStorageMiddleware =
  (state: MiddlewareAPI) => (next: any) => (action: any) => {
    next(action);

    if (action.type === 'pokemons/toggleFavorite') {
      const pokemons = state.getState().pokemons;

      localStorage.setItem('pokemons-favorites', JSON.stringify(pokemons));
      return;
    }
  };
