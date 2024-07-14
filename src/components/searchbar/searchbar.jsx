import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-container">
      <h2 className="search-title">Search the books available in Library</h2>
      <br />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title, author, or date"
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
