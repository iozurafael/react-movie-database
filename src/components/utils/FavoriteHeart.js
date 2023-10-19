import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFavoriteMovies } from '../../store';
import { addToast } from '../../store';

function FavoriteHeart({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const isFavorite = favorites.some((favorite) => favorite.id === movie.id);
      setIsFavorite(isFavorite);
    } catch (error) {
      dispatch(
        addToast({
          message: 'An error occurred while fetching favorites.',
        })
      );
    }
  }, [movie.id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      if (isFavorite) {
        const updatedFavorites = favorites.filter(
          (favMovie) => favMovie.id !== movie.id
        );
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        dispatch(setFavoriteMovies(updatedFavorites));
      } else {
        const updatedFavorites = [...favorites, movie];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        dispatch(setFavoriteMovies(updatedFavorites));
      }

      setIsFavorite(!isFavorite);
    } catch (error) {
      dispatch(
        addToast({
          message:
            'An error occurred while trying to add / remove a favorite movie',
        })
      );
    }
  };

  const heartIcon = isFavorite ? (
    <AiFillHeart onClick={toggleFavorite} style={{ color: 'red' }} />
  ) : (
    <AiOutlineHeart onClick={toggleFavorite} />
  );

  return <div className="heartIcon">{heartIcon}</div>;
}

export default FavoriteHeart;
