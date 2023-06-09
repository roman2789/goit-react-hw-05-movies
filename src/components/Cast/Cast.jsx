import { getMovieCredits } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noPhoto from '../../images/no_photo.jpeg';
import { CastList, CastItem } from './Cast.component';
import LoaderComponent from '../../components/Loader/Loader';

const Cast = () => {
  const [actors, setActor] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieCredits(id)
      .then(info => {
        if (!info.length) {
          setError('No cast found...');
          return;
        }
        setActor(info);
      })
      .catch(error => {
        console.log(error);
        setError('No information');
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading && <LoaderComponent />}
      {error && <div>{error}</div>}
      <CastList>
        {actors &&
          actors.map(actor => (
            <CastItem key={actor.cast_id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                    : noPhoto
                }
                alt={actor.original_name}
              />
              <h4>{actor.original_name}</h4>
              <p>{actor.character}</p>
            </CastItem>
          ))}
      </CastList>
    </>
  );
};

export default Cast;
