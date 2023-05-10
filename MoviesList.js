import React from 'react';

import Movies from './Movies'


const MovieList = (props) => {
  return (
    <ul>
      {props.movies.map((movie) => (
        <Movies
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;