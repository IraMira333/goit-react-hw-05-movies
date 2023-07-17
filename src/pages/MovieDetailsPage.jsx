import getApi from 'API/Api';
import toastConfig from 'components/toastConfig';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
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
        // const moviesTitleList = movie.results.map(({ title, id }) => {
        //   return { title, id };
        // });

        // setTrendingMovies([...moviesTitleList]);
        console.log(movieCard);
      } catch (error) {
        console.log(err);
        setErr(error.message);

        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [err]);
  const data = new Date(movieDetails.release_date);
  const release = data.getFullYear();
  const userScore = Math.ceil(movieDetails.popularity);

  return (
    <main>
      <h2>
        {movieDetails.title} ({release}){' '}
      </h2>
      <p>User Score: {userScore}%</p>
      <img src="" alt="" />
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
      {/* <h3>Genres</h3>
      <div>
        {movieDetails.genres.map(genr => {
          return <p>{genr.name}</p>;
        })}
      </div> */}
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

export default MovieDetails;
