import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../API';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const trendingMovies = async () => {
      const trendList = await getTrendingMovies();
      setMovies(trendList);
      console.log(trendList);
      return trendList;
    };
    trendingMovies();
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to="/movies/:id">{movie.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Home;
