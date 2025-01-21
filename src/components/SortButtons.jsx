import React from 'react';

function SortButtons({ onSort }) {
  return (
    <div className="sort-buttons">
      <button onClick={() => onSort('rating')}>Trier par note</button>
      <button onClick={() => onSort('releaseYear')}>Trier par année</button>
    </div>
  );
}

export default SortButtons;
