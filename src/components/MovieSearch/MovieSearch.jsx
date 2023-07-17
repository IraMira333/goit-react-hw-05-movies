import PropTypes from 'prop-types';
import css from './MovieSearch.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MovieSearch = ({ searchMovieInput }) => {
  const onSubmit = e => {
    e.preventDefault();
    const searching = e.target.searching.value.trim().toLowerCase();
    if (searching === '') {
      toast.warn('Please enter a request!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    searchMovieInput(searching);
  };

  return (
    <form className={css.searchForm} onSubmit={onSubmit}>
      <input
        className={css.searchFormBtnInput}
        type="text"
        name="searching"
        autoComplete="off"
        autoFocus
      />
      <button type="submit" className={css.searchFormBtn}>
        Search
      </button>
    </form>
  );
};

MovieSearch.propTypes = {
  searchMovieInput: PropTypes.func.isRequired,
};

export default MovieSearch;