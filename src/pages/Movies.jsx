import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../API';
import SearchBar from 'components/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

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
            alert('No movies found');
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
      {loading && 'Loading ...'}
      {error && <div>{error}</div>}
      <SearchBar onSearch={onSubmit} />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
