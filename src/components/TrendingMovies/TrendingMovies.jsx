import { Link } from 'react-router-dom';

const TrendingMovies = ({ trendingMovies }) => {
  return (
    <ul>
      {trendingMovies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TrendingMovies;
