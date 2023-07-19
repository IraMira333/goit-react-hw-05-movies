import PropTypes from 'prop-types';
import css from './MovieSearch.module.css';

const MovieSearch = ({ handleSubmit, changeInput }) => {
  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.searchFormBtnInput}
        type="text"
        name="searching"
        autoComplete="off"
        autoFocus
        onChange={e => changeInput(e.target.value)}
      />
      <button type="submit" className={css.searchFormBtn}>
        Search
      </button>
    </form>
  );
};

MovieSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default MovieSearch;
