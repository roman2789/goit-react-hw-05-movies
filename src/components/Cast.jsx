import { getMovieCredits } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [actors, setActor] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieCredits(id)
      .then(info => {
        setActor(info);
      })
      .catch(error => {
        console.log(error);
        setError('No information');
      })
      .finally(() => setLoading(false));
  }, [id]);

  console.log(actors);

  return (
    <>
      {loading && 'Loading...'}
      {error && <div>{error}</div>}
      <ul>
        {actors &&
          actors.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.original_name}
              />
              <h4>{actor.original_name}</h4>
              <p>{actor.character}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Cast;
