import PropTypes from 'prop-types';
import images from '../images/film-popkorn-700x466-1-min.jpg';
import css from './MovieDetails.module.css';

const MovieDetails = ({ movieDetails }) => {
  const {
    release_date,
    genres,
    vote_average,
    overview,
    poster_path,
    title,
    tagline,
  } = movieDetails;

  const data = new Date(release_date);
  const release = data.getFullYear();
  const userScore = Math.ceil(vote_average);
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w400${poster_path}`
    : images;
  return (
    <div className={css.viewBox}>
      <img src={poster} alt={tagline} width={250} />
      <div>
        <h2>
          {title} ({release})
        </h2>
        <p>User Score: {userScore}%</p>

        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <div className={css.genres}>
          {genres?.map(({ id, name }) => {
            return <p key={id}>{name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movieDetails: PropTypes.object.isRequired,
};
export default MovieDetails;
