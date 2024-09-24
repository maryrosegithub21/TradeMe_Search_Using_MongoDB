import React, { useState } from 'react';
import './SearchComponent.module.css';
import { FaSearch } from 'react-icons/fa'; // Importing search icon

const SearchComponent = () => {
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = async () => {
    const response = await fetch('http://localhost:5000/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input, category })
    });

    const data = await response.json();
    setResult(data.generatedText);
  };

  return (
    <div className="search-container">
      <h1 className="header-h1">Shop new and used items for sale</h1>
      <div className="search-bar">
        <div className="input-search-container">
        <div className="input-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Search input text"
          />
          </div>
          <button onClick={handleSearch}>
            <FaSearch className="button-icon" /> Search
          </button>
        </div>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Browse by category</option>
          <option value="home-living">Home & Living</option>
          <option value="antiques-collectibles">Antiques & Collectibles</option>
          <option value="art">Art</option>
          <option value="baby-gear">Baby Gear</option>
          <option value="books-stationary">Books & Stationary</option>
          <option value="building-renovation">Building & Renovation</option>
          <option value="business-farming-industry">Business Farming & Industry</option>
          <option value="clothing-fashion">Clothing & Fashion</option>
        </select>
      </div>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default SearchComponent;