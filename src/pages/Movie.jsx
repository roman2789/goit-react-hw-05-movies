import { getMovieDetails } from '../API';
import { useEffect, useRef, useState, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  Button,
  MainInfo,
  Title,
} from 'components/MovieList/MovieList.component';
import noPhoto from '../images/no_photo.jpeg';
import LoaderComponent from '../components/Loader/Loader';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const backLinkLocRef = useRef(location.state?.from ?? '/home');

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

  const handleClick = () => navigate(backLinkLocRef.current);

  return (
    <div>
      {loading && <LoaderComponent />}
      {error && <div>{error}</div>}
      {movie && (
        <div>
          <Button onClick={handleClick}>GO BACK</Button>

          <MainInfo>
            <div>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : noPhoto
                }
                alt="movie poster"
              />
            </div>
            <div>
              <div>
                <Title>{movie.title || movie.original_title}</Title>
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
          </MainInfo>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Suspense fallback={<LoaderComponent />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default Movie;
