import { Fragment, useState } from "react";
import MovieList from "./component/Header/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovieHandler = () => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openindText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transformedMovies);
      });
  };

  return (
    <Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={movies} />
      </section>
    </Fragment>
  );
}

export default App;
