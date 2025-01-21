import React, { useState } from 'react';
import './AddFilmForm.css';
function AddFilmForm({ onAddFilm }) {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !director || !releaseYear || !genre || !rating) {
      setError('Tous les champs sont obligatoires.');
      return;
    }
    if (rating < 0 || rating > 10) {
      setError('La note doit être comprise entre 0 et 10.');
      return;
    }
    onAddFilm({ title, director, releaseYear, genre, rating });
    setTitle('');
    setDirector('');
    setReleaseYear('');
    setGenre('');
    setRating('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Réalisateur"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
      />
      <input
        type="number"
        placeholder="Année de sortie"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
      />
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="">Genre</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Action">Action</option>
        <option value="Historical Drama">Historical Drama</option>
        <option value="Comedy-Drama">Comedy-Drama</option>
        <option value="Fantasy">Fantasy</option>
      </select>
      <input
        type="number"
        placeholder="Note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Ajouter</button>
      <button type="button" onClick={() => {
        setTitle('');
        setDirector('');
        setReleaseYear('');
        setGenre('');
        setRating('');
        setError('');
      }}>Réinitialiser</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default AddFilmForm;
