import { getMovieReviews } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieReviews(id)
      .then(res => {
        if (!res.length) {
          setError('No reviews');
          return;
        }
        console.log(res);
        setReviews(res);
      })
      .catch(error => {
        console.log(error);
        setError('Oops, smth went wrong...');
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading && 'Loading ...'}
      {error && <div>{error}</div>}
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
