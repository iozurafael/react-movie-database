import { useParams } from 'react-router-dom';
import { useFetchMovieDetailsQuery } from '../store';
import FavoriteHeart from '../components/utils/FavoriteHeart';

function MovieDetailView() {
  const { movieId } = useParams();
  const { data, error, isFetching } = useFetchMovieDetailsQuery(movieId);

  let content;
  if (error) content = 'Eroare';
  else if (isFetching) content = 'Loading...';
  else {
    content = (
      <>
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
          }}
          className="movie-detailview-background"
        >
          <div className="movie-detailview-details">
            <div className="movie-detailview-title">
              {data.title} <FavoriteHeart movie={data} />
            </div>
            <div className="movie-detailview-overview">{data.overview}</div>
          </div>
        </div>
      </>
    );
  }
  return <div>{content}</div>;
}

export default MovieDetailView;
