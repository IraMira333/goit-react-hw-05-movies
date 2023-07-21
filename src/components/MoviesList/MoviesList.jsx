import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import images from '../images/film-popkorn-700x466-1-min.jpg';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, tagline, title, poster_path }) => {
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w400${poster_path}`
          : images;
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={poster} alt={tagline} width={250} />
              <p>{title}</p>
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
