import { useNavigate } from 'react-router-dom';
import FavoriteHeart from '../utils/FavoriteHeart';

function MovieItem({ movie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="movies-item"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path}), url(/no-image-fallback.png)`,
      }}
    >
      <FavoriteHeart movie={movie} />

      <p className="movies-item-title" style={{ zIndex: '999' }}>
        {movie.title}
      </p>
    </div>
  );
}

export default MovieItem;
