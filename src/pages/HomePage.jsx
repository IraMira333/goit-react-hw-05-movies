import getApi from 'API/Api';
import MoviesList from 'components/MoviesList/MoviesList';
import Spiner from 'components/Spiner/Spiner';
import toastConfig from 'components/toastConfig';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTrendingMovie() {
      try {
        setIsLoading(true);

        const movie = await getApi('/trending/movie/day');
        const moviesTitleList = movie.results.map(({ title, id }) => {
          return { title, id };
        });

        setTrendingMovies([...moviesTitleList]);
      } catch (error) {
        console.log(err);
        setErr(error.message);
        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    }
    getTrendingMovie();
  }, [err]);

  return (
    <main>
      {isLoading && <Spiner />}
      <MoviesList movies={trendingMovies} />
    </main>
  );
};

export default HomePage;
