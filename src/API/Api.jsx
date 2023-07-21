import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ba8df02c5548f4248e5d9d0723885591';

export const getApi = async (endPoint, dataQuery) => {
  const { data } = await axios.get(
    `${URL}${endPoint}?api_key=${API_KEY}${
      dataQuery ? `&query=${dataQuery}` : ''
    }&language=en-US`
  );

  return data;
};
export const getTrending = async () => await getApi('/trending/movie/day');

export const getMoviesByName = async name =>
  await getApi('/search/movie', name);
