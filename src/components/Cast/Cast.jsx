import { getApi } from 'API/Api';
import toastConfig from 'components/toastConfig';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import avatar from '../images/icon-user-640x640-min.png';
import css from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [err, setErr] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        const movieCast = await getApi(`/movie/${movieId}/credits`);
        if (!movieCast) {
          toast.warning(`We haven't found any cast information`, toastConfig);
          return;
        }
        setCast(movieCast.cast);
      } catch (error) {
        console.log(err);
        setErr(error.message);

        toast.error(error.message, toastConfig);
      }
    }
    getMovieCast();
  }, [err, movieId]);

  return (
    <>
      {!cast && <p>We haven't found any cast information</p>}
      <ul className={css.castBox}>
        {cast?.map(({ profile_path, id, name, character }) => {
          const foto = profile_path
            ? `https://image.tmdb.org/t/p/w400${profile_path}`
            : avatar;
          return (
            <li className={css.castItem} key={id}>
              <img className={css.photo} src={foto} alt={name} width={120} />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cast;
