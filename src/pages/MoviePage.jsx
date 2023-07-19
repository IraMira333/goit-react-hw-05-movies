import { useState, useEffect } from 'react';
import getApi from 'API/Api';
import toastConfig from 'components/toastConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spiner from 'components/Spiner/Spiner';
import MoviesList from 'components/MoviesList/MoviesList';
import MovieSearch from 'components/MovieSearch/MovieSearch';
import { useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchParams.size) return;

    async function getMovie() {
      try {
        setIsLoading(true);

        const moviesSearch = await getApi('/search/movie', query);

        if (moviesSearch.results.length === 0) {
          toast.warning(`No movies found`, toastConfig);
          return;
        }
        const moviesTitleList = moviesSearch.results.map(({ title, id }) => {
          return { title, id };
        });

        setMovies(moviesTitleList);
      } catch (error) {
        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [query, searchParams.size]);

  const handleSubmit = e => {
    e.preventDefault();
    const searching = e.target.children.searching.value.trim().toLowerCase();
    if (searching) {
      setSearchParams({ query: searching });
    } else {
      setSearchParams({});
      toast.warn('Please enter a request!', toastConfig);
    }
  };
  const changeInput = inputQuery => {
    if (inputQuery === '') {
      setSearchParams({});
      setMovies([]);
    }
  };
  return (
    <main>
      <MovieSearch handleSubmit={handleSubmit} changeInput={changeInput} />
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
