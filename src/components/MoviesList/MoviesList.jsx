import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
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

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
