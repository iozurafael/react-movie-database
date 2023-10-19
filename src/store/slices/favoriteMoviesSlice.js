import { createSlice } from '@reduxjs/toolkit';

const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState: [],
  reducers: {
    setFavoriteMovies: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFavoriteMovies } = favoriteMoviesSlice.actions;
export const favoriteMoviesReducer = favoriteMoviesSlice.reducer;
