import { getMovieDetails } from '../API';
import { useEffect, useState } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  useEffect(() => {
    setLoading(true);
    getMovieDetails(id)
      .then(info => {
        setMovie(info);
      })
      .catch(error => {
        console.log(error);
        setError('Something went wrong. Please try again.');
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleClick = () => navigate(location?.state?.from ?? '/');

  return (
    <div>
      {loading && 'Loading ...'}
      {error && <div>{error}</div>}
      <div>
        <button onClick={handleClick}>GO BACK</button>
        {movie && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt="movie poster"
            />
            <div>
              <div>
                <h1>{movie.title}</h1>
                <p>
                  User score: {Number(Math.round(movie.vote_average * 10))}%
                </p>
              </div>

              <div>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
              </div>
              <div>
                <h2>Genres</h2>
                <ul>
                  {movie.genres.map(({ name }) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;
