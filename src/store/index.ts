import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import pokemonsReducer from './pokemons/pokemonsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { localStorageMiddleware } from './pokemons/middlewares/localStorage-middleware';

export const store = configureStore({
  reducer: { counter: counterReducer, pokemons: pokemonsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  // middleware: (getDefaultMiddleware) =>
  //   new Tuple(getDefaultMiddleware(), localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
