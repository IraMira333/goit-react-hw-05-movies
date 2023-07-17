import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ba8df02c5548f4248e5d9d0723885591';

export const getApi = async (endPoint, dataQuery) => {
  const response = await axios.get(
    `${URL}${endPoint}?api_key=${API_KEY}${
      dataQuery ? `&query=${dataQuery}` : ''
    }&language=en-US`
  );
  console.log(response);
  return response;
};

export default getApi;
