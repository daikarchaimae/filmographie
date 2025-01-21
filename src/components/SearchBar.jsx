import React, { useState } from 'react';
import './SearchBar.css'
function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Rechercher un film..."
      value={term}
      onChange={handleChange}
      className='test'
    />
  );
}

export default SearchBar;
