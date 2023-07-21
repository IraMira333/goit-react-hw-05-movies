import { useState, useEffect } from 'react';
import { getMoviesByName } from 'API/Api';
import toastConfig from 'components/toastConfig';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesList from 'components/MoviesList/MoviesList';
import MovieSearch from 'components/MovieSearch/MovieSearch';
import { useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!querySearch) return;

    async function getMovie() {
      try {
        const moviesSearch = await getMoviesByName(querySearch);

        if (moviesSearch.results.length === 0) {
          toast.warning(`No movies found`, toastConfig);
          return;
        }
        const moviesTitleList = moviesSearch.results.map(
          ({ tagline, poster_path, title, id }) => {
            return { title, id, poster_path, tagline };
          }
        );

        setMovies(moviesTitleList);
      } catch (error) {
        toast.error(error.message, toastConfig);
      }
    }
    getMovie();
  }, [querySearch, searchParams.size]);

  const handleSubmit = e => {
    e.preventDefault();
    const searching = e.target.searching.value.trim().toLowerCase();
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
    <>
      <MovieSearch handleSubmit={handleSubmit} changeInput={changeInput} />

      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviePage;
