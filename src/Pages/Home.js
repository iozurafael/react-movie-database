import { useState, useEffect } from 'react';
import { useSearchMoviesQuery } from '../store';
import SearchField from '../components/utils/SearchField';
import GridSkeleton from '../components/utils/GridSkeleton';
import MoviesList from '../components/Movies/MoviesList';
import NoContent from '../components/Movies/NoContent';
import Button from '../components/utils/Button';

function Home() {
  const [moviesList, setMoviesList] = useState([]);
  const [searchObject, setSearchObject] = useState({ query: '', page: 1 });

  const {
    data: searchData,
    error: errorSearch,
    isFetching: isFetchingSearch,
  } = useSearchMoviesQuery(
    {
      searchTerm: searchObject.query,
      page: searchObject.page,
    },
    {
      skip: searchObject.query === '',
    }
  );

  const onSearch = (query) => {
    if (query === '') {
      setSearchObject({
        query: '',
        page: 0,
      });
    } else {
      setSearchObject({
        query: query,
        page: 1,
      });
    }
  };

  useEffect(() => {
    if (searchData && searchData.results) {
      if (searchData.page === 1) setMoviesList(searchData.results);
      else
        setMoviesList((prevMovies) => [...prevMovies, ...searchData.results]);
    }
  }, [searchData]);

  const loadNextPage = () => {
    setSearchObject((prevSearchObject) => ({
      ...prevSearchObject,
      page: prevSearchObject.page + 1,
    }));
  };

  const displayButton =
    !isFetchingSearch &&
    (searchObject.page < searchData?.total_pages ? (
      <Button onClick={loadNextPage}>Load more movies</Button>
    ) : (
      <p>That's all the results for your search</p>
    ));

  let content;

  if (errorSearch) {
    content = 'Error';
  } else if (isFetchingSearch && searchObject?.page < 2) {
    content = <GridSkeleton count={20} />;
  } else if (
    searchObject.query !== '' &&
    !moviesList.length &&
    !isFetchingSearch
  ) {
    content = (
      <NoContent>
        You have searched for something that does not exist.
      </NoContent>
    );
  } else if (searchObject.query !== '') {
    content = (
      <>
        <MoviesList movies={moviesList} />
        <div className="loading-header">{displayButton}</div>
        {isFetchingSearch && <GridSkeleton count={20} />}
      </>
    );
  }

  return (
    <div className="safePage">
      <SearchField onSearch={onSearch} />
      {content}
    </div>
  );
}
export default Home;
