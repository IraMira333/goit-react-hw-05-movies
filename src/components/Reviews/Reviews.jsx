import getApi from 'API/Api';
import Spiner from 'components/Spiner/Spiner';
import toastConfig from 'components/toastConfig';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        setIsLoading(true);

        const movieReviews = await getApi(`/movie/${movieId}/reviews`);
        if (!movieReviews) {
          return;
        }
        setReviews(movieReviews.results);
      } catch (error) {
        console.log(err);
        setErr(error.message);

        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieReviews();
  }, [err, movieId]);

  return (
    <>
      {isLoading && <Spiner />}
      {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
      <ul>
        {reviews?.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Reviews;
