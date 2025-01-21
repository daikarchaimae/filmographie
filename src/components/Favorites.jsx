import React from 'react';

function Favorites({ favorites, onRemoveFavorite }) {
  return (
    <div className="favorites">
      <h2>Favoris</h2>
      {favorites.map(movie => (
        <div key={movie.title} className="favorite-card">
          <h3>{movie.title}</h3>
          <button onClick={() => onRemoveFavorite(movie)}>Retirer</button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
