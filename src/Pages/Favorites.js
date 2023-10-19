import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToast } from '../store';
import MoviesList from '../components/Movies/MoviesList';
import NoContent from '../components/Movies/NoContent';
import GridSkeleton from '../components/utils/GridSkeleton';
function Favorites() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.favoriteMovies);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [hasPageLoaded, setHasPageLoaded] = useState(false);

  useEffect(() => {
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavoriteMovies(favorites);
      setHasPageLoaded(true);
    } catch (error) {
      dispatch(
        addToast({
          message: 'An error occurred while fetching favorites.',
        })
      );
    }
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
