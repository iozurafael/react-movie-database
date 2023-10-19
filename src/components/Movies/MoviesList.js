import MovieItem from './MovieItem';

function MoviesList({ movies }) {
  const renderMovies = movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });

  return (
    <div>
      <>
        <div className="movies-grid">{renderMovies}</div>
      </>
    </div>
  );
}

export default MoviesList;
