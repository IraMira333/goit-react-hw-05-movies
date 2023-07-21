import { getTrending } from 'API/Api';
import MoviesList from 'components/MoviesList/MoviesList';
import toastConfig from 'components/toastConfig';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function getTrendingMovie() {
      try {
        const movie = await getTrending();
        const moviesTitleList = movie.results.map(
          ({ tagline, poster_path, title, id }) => {
            return { title, id, poster_path, tagline };
          }
        );

        setTrendingMovies([...moviesTitleList]);
      } catch (error) {
        console.log(err);
        setErr(error.message);
        toast.error(error.message, toastConfig);
      }
    }
    getTrendingMovie();
  }, [err]);

  return (
    <>
      <h1>Trending Today</h1>

      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default HomePage;
