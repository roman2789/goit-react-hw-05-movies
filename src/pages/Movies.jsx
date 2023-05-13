import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getSearchMovies } from '../API';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async querySearch => {
    const searchList = await getSearchMovies(querySearch);
    console.log(searchList);
    setMovies(searchList);
    return searchList;
  };

  const handleQuery = e => {
    setQuery(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    query !== '' && searchMovies(query);
    console.log(searchMovies(query));
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="input" onChange={handleQuery} />
        <button type="submit">Search</button>
        {/*  */}
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to="/movies/:id">{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
