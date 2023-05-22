import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../API';
import { useLocation } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieLIst';
import LoaderComponent from '../components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const trendingMovies = async () => {
      setLoading(true);
      try {
        const trendList = await getTrendingMovies();
        setMovies(trendList);
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
      {loading && <LoaderComponent />}
      {!loading && !movies.length && 'NOT FOUND'}
      {error && <div>{error}</div>}
      {movies && <MovieList movies={movies} location={location} />}
    </div>
  );
};

export default Home;
