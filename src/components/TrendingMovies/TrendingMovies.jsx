import PropTypes from 'prop-types';
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

TrendingMovies.propTypes = {
  trendingMovies: PropTypes.array.isRequired,
};

export default TrendingMovies;
