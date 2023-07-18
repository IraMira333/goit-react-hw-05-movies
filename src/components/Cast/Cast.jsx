import getApi from 'API/Api';
import Spiner from 'components/Spiner/Spiner';
import toastConfig from 'components/toastConfig';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import avatar from '../images/icon-user-640x640-min.png';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const [err, setErr] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        setIsLoading(true);

        const movieCast = await getApi(`/movie/${movieId}/credits`);
        if (!movieCast) {
          toast.warning(`We haven't found any cast information`, toastConfig);
          return;
        }
        setCast(movieCast.cast);

        console.log(movieCast.cast);
      } catch (error) {
        console.log(err);
        setErr(error.message);

        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieCast();
  }, [err, movieId]);

  return (
    <>
      {isLoading && <Spiner />}
      {!cast && <p>We haven't found any cast information</p>}
      <ul>
        {cast?.map(actor => {
          const foto = actor.profile_path
            ? `https://image.tmdb.org/t/p/w400${actor.profile_path}`
            : avatar;
          return (
            <li key={actor.id}>
              <img src={foto} alt={actor.name} width={120} />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Cast;
