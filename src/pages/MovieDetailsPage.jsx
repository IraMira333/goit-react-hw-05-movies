import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <main>
      <h2>назва фільму</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
