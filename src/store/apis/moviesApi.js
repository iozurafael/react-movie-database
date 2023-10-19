import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzBjMzk2NzdmNTYwYTZiMmE5ZGRhZmFmMjU1YzE4NiIsInN1YiI6IjY1MjNlMDBkMDcyMTY2NDViNGZmNWFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SNyfItT9pLMgujvWBB3NJXzrWpsSKkA8qO5jqleeuiY'
      );
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchMovies: builder.query({
        query: (page) => {
          return {
            url: '/discover/movie',
            method: 'GET',
            params: {
              page: page,
            },
          };
        },
      }),

      fetchMovieDetails: builder.query({
        query: (movieId) => {
          return {
            url: `/movie/${movieId}`,
            method: 'GET',
            params: {
              language: 'en-US',
            },
          };
        },
      }),

      searchMovies: builder.query({
        query: ({ searchTerm, page }) => {
          return {
            url: '/search/movie',
            method: 'GET',
            params: {
              query: searchTerm,
              include_adult: 'false',
              language: 'en-US',
              page: page,
            },
          };
        },
      }),
    };
  },
});

export const {
  useFetchMoviesQuery,
  useSearchMoviesQuery,
  useFetchMovieDetailsQuery,
} = moviesApi;
export { moviesApi };
