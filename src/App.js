import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SortButtons from './components/SortButtons';
import Pagination from './components/Pagination';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import AddFilmForm from './components/AddFilmForm';
import './App.css';

const moviesData = [
  { title: "Inception", director: "Christopher Nolan", releaseYear: 2010, genre: "Science Fiction", rating: 8.8 },
  { title: "The Godfather", director: "Francis Ford Coppola", releaseYear: 1972, genre: "Crime", rating: 9.2 },
  { title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008, genre: "Action", rating: 9.0 },
  { title: "Pulp Fiction", director: "Quentin Tarantino", releaseYear: 1994, genre: "Crime", rating: 8.9 },
  { title: "Schindler's List", director: "Steven Spielberg", releaseYear: 1993, genre: "Historical Drama", rating: 9.0 },
  { title: "The Shawshank Redemption", director: "Frank Darabont", releaseYear: 1994, genre: "Drama", rating: 9.3 },
  { title: "Forrest Gump", director: "Robert Zemeckis", releaseYear: 1994, genre: "Comedy-Drama", rating: 8.8 },
  { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", releaseYear: 1999, genre: "Science Fiction", rating: 8.7 },
  { title: "Fight Club", director: "David Fincher", releaseYear: 1999, genre: "Drama", rating: 8.8 },
  { title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", releaseYear: 2003, genre: "Fantasy", rating: 9.0 }
];

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = (term) => {
     setSearchTerm(term); };
  const handleSort = (type) => { 
     setSortType(type); };
  const handleMovieClick = (movie) => { 
     setSelectedMovie(movie); };
   const handlePageChange = (page) => { 
    setCurrentPage(page); };
   const handleAddFavorite = (movie) => {
     setFavorites([...favorites, movie]); };
   const handleRemoveFavorite = (movie) => {
     setFavorites(favorites.filter(fav => fav.title !== movie.title)); }; 
  const handleAddFilm = (newFilm) => { 
    setMovies([...movies, newFilm]); }; 
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) );
   const sortedMovies = [...filteredMovies].sort((a, b) => {
     if (sortType === 'rating') { return b.rating - a.rating; } 
     else if (sortType === 'releaseYear') { 
      return b.releaseYear - a.releaseYear; } 
      return 0; });
    const moviesPerPage = 5; 
    const totalPages = Math.ceil(sortedMovies.length / moviesPerPage); 
    const displayedMovies = sortedMovies.slice((currentPage - 1) * moviesPerPage, currentPage * moviesPerPage); 
    return ( 
                    <div className="App"> 
                        <Header /> 
                         <SearchBar onSearch={handleSearch} /> 
                         <SortButtons onSort={handleSort} /> 
                         <MovieList movies={displayedMovies} onMovieClick={handleMovieClick} /> 
                         {selectedMovie && <MovieDetails movie={selectedMovie} />}
                          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} /> 
                          <Favorites favorites={favorites} onRemoveFavorite={handleRemoveFavorite} /> 
                          <AddFilmForm onAddFilm={handleAddFilm} />
                           <Footer /> 
                    </div> 
            );
          
          
          
}

export default App;