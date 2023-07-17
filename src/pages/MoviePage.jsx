import MovieSearch from 'components/MovieSearch/MovieSearch';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Spiner from 'components/Spiner/Spiner';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = 'cat';

  const searchMovieInput = queryInput => {
    if (query === queryInput) {
      return;
    }
    console.log(queryInput);

    setMovies([]);
  };

  return (
    <main>
      <MovieSearch searchMovieInput={searchMovieInput} />
      {isLoading && <Spiner />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default MoviePage;
