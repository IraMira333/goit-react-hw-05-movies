import { getApi } from 'API/Api';
import toastConfig from 'components/toastConfig';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Spiner from 'components/Spiner/Spiner';
import Goback from 'components/GoBack/GoBack';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [err, setErr] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const backLinkLocationRef = backLink.current;

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const movieCard = await getApi(`/movie/${movieId}`);
        setMovieDetails(movieCard);
      } catch (error) {
        console.log(err);
        setErr(error.message);

        toast.error(error.message, toastConfig);
      }
    }
    getMovieDetails();
  }, [err, movieId]);

  return (
    <>
      <Goback location={backLinkLocationRef} />
      {movieDetails && <MovieDetails movieDetails={movieDetails} />}
      <div className={`${css.additionalBox} ${css.noMargin}`}>
        <h4 className={css.title}>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Spiner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
