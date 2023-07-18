import { useState, useEffect } from 'react';
import getApi from 'API/Api';
import toastConfig from 'components/toastConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spiner from 'components/Spiner/Spiner';
import MoviesList from 'components/MoviesList/MoviesList';
import MovieSearch from 'components/MovieSearch/MovieSearch';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (!query) return;
    async function getMovie() {
      try {
        setIsLoading(true);

        const moviesSearch = await getApi('/search/movie', query);
        console.log(moviesSearch.results.length);
        if (moviesSearch.results.length === 0) {
          toast.warning(`No movies found`, toastConfig);
          return;
        }
        const moviesTitleList = moviesSearch.results.map(({ title, id }) => {
          return { title, id };
        });

        setMovies(moviesTitleList);
      } catch (error) {
        console.log(err);
        setErr(error.message);
        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [err, query]);

  const searchMovieInput = queryInput => {
    if (query === queryInput) {
      return;
    }
    console.log(queryInput);
    setQuery(queryInput);
    setMovies([]);
  };

  return (
    <main>
      <MovieSearch searchMovieInput={searchMovieInput} />
      {isLoading && <Spiner />}
      {movies.length > 0 && <MoviesList movies={movies} />}
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

export default MoviePage;
