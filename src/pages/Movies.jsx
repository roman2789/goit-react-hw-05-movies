import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovies } from '../API';
import SearchBar from 'components/SearchBar';
import MovieList from 'components/MovieList/MovieLIst';
import LoaderComponent from '../components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const querySearch = searchParams.get('query');

  useEffect(() => {
    if (!querySearch) {
      return;
    }
    const getMovie = () => {
      setLoading(true);
      getSearchMovies(querySearch)
        .then(searchList => {
          if (!searchList) {
            return alert('No movies found');
          }
          setMovies(searchList);
        })
        .catch(error => {
          setError('Sorry, something went wrong!!!');
          console.log(error);
        })
        .finally(setLoading(false));
    };
    getMovie();
  }, [querySearch]);

  const onSubmit = queryValue => {
    setSearchParams({ query: `${queryValue}` });
  };

  return (
    <>
      {loading && <LoaderComponent />}
      {error && <div>{error}</div>}
      <SearchBar onSearch={onSubmit} />
      {movies && <MovieList movies={movies} location={location} />}
    </>
  );
};

export default Movies;
