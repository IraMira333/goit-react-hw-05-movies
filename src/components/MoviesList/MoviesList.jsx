import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import images from '../images/film-popkorn-700x466-1-min.jpg';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.trendingBox}>
      {movies.map(({ id, tagline, title, poster_path }) => {
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w400${poster_path}`
          : images;
        return (
          <li key={id} className={css.trendingItem}>
            <Link
              className={css.link}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              <img src={poster} alt={tagline} width={250} />
              <p className={css.title}>{title}</p>
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
