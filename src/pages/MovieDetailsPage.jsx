import getApi from 'API/Api';
import toastConfig from 'components/toastConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Spiner from 'components/Spiner/Spiner';
import Goback from 'components/GoBack/GoBack';

const MovieDetailsPage = () => {
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});

  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const backLinkLocationRef = backLink.current;

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
      {isLoading && <Spiner />}
      <Goback location={backLinkLocationRef} />
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  );
};

export default MovieDetailsPage;
