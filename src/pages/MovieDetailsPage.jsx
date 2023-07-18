import getApi from 'API/Api';
import toastConfig from 'components/toastConfig';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true);

        const movieCard = await getApi(`/movie/${movieId}`);
        setMovieDetails(movieCard);
      } catch (error) {
        console.log(err);
        setErr(error.message);

        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [err, movieId]);

  return (
    <main>
      {!isLoading && <MovieDetails movieDetails={movieDetails} />}
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetailsPage;
