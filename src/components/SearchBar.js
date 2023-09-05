import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSearch(query);
  };

  return (
    <form className="search-bar" onSubmit={null}>
      <div className="search-icon">
          <i className='bx bx-search-alt-2'></i>
      </div>
      <input
        type="text"
        placeholder="       Search products, brands and categories"
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <button type="submit" className="search-button">SEARCH</button>
    </form>
  );
}

export default SearchBar;