import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import css from './GoBack.module.css';

const Goback = ({ backLinkLocationRef }) => {
  return (
    <Link to={backLinkLocationRef} className={css.goback}>
      <HiArrowLeft /> Go back
    </Link>
  );
};

export default Goback;
