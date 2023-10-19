import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MoviesList from '../components/Movies/MoviesList';
import NoContent from '../components/Movies/NoContent';
import GridSkeleton from '../components/utils/GridSkeleton';
function Favorites() {
  const movies = useSelector((state) => state.favoriteMovies);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [hasPageLoaded, setHasPageLoaded] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteMovies(favorites);
    setHasPageLoaded(true);
  }, [movies]);

  let content;
  if (hasPageLoaded) {
    if (!favoriteMovies.length)
      content = (
        <NoContent>
          You do not have any favorite movies yet. Try adding one.
        </NoContent>
      );
    else content = <MoviesList movies={favoriteMovies} />;
  } else content = <GridSkeleton count={6} />;

  return <div className="safePage">{content}</div>;
}
export default Favorites;
