const MoviesList = movies => {
  return movies.map(movie => {
    return <li key={movie.id}>{movie.title}</li>;
  });
};

export default MoviesList;
