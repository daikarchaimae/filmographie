import React from 'react';

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.title} className="movie-card" onClick={() => onMovieClick(movie)}>
          <h3>{movie.title}</h3>
          <p>{movie.genre} - {movie.releaseYear}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
