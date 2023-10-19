import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { moviesApi } from './apis/moviesApi';
import {
  favoriteMoviesReducer,
  setFavoriteMovies,
} from './slices/favoriteMoviesSlice';

export const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviesApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchMoviesQuery,
  useSearchMoviesQuery,
  useFetchMovieDetailsQuery,
} from './apis/moviesApi';
export { setFavoriteMovies };
