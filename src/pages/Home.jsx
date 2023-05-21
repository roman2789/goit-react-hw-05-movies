import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../API';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const trendingMovies = async () => {
      setLoading(true);
      try {
        const trendList = await getTrendingMovies();
        setMovies(trendList);
        console.log(trendList);
        return trendList;
      } catch (error) {
        setError('Ooops. Something went wrong...');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    trendingMovies();
  }, []);

  return (
    <div>
      {loading && 'Loading ...'}
      {!loading && !movies.length && 'NOT FOUND'}
      {error && <div>{error}</div>}
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
