import React, { useState } from 'react';
import './Marketplace.module.css';

import homeImage from '../../../assets/MarketPlace/home.png';
import antiques from '../../../assets/MarketPlace/antique.png';
import art from '../../../assets/MarketPlace/art.png';
import baby from '../../../assets/MarketPlace/babygear.png';
import books from '../../../assets/MarketPlace/books.png';
import building from '../../../assets/MarketPlace/building.png';
import business from '../../../assets/MarketPlace/business.png';
import clothing from '../../../assets/MarketPlace/clothing.png';


const Marketplace = () => {
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('');
  const [results, setResults] = useState([]);
  // const [texts, setTexts] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = async () => {
    console.log('Search button clicked'); // Added log
    try {
      const response = await fetch('http://localhost:3000/api/auctions/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input, category })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch data: ${errorText}`);

      }

      const data = await response.json();
      console.log('Fetched data:', data); // Added log
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // L5-mission-five-frontend\src\assets\MarketPlace\home.png
  const categories = [
    { name: 'Home & Living', image: homeImage },
    { name: 'Antiques & Collectibles', image: antiques },
    { name: 'Art', image: art },
    { name: 'Baby Gear', image: baby },
    { name: 'Books & Stationary', image: books },
    { name: 'Building & Renovation', image: building },
    { name: 'Business Farming & Industry', image: business },
    { name: 'Clothing & Fashion', image: clothing },
];


  return (
    <div>

<div className="marketplace">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/marketplace">Marketplace</a>
      </div>
      <h1>Shop new and used items for sale</h1>
      <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search for auctions"
      />
      <input
        type="text"
        value={category}
        onChange={handleCategoryChange}
        placeholder="Category"
      />
      <button onClick={handleSearch}>Search</button>
      </div>
      <div className="explore-section">
        <h2>Explore Marketplace</h2>
        <div className="categories">
        {/* <ul> */}
      {results && results.map((item) => (
          <div key={item._id} className="category-card">
            <img src={`http://localhost:3000/public/${item.image}`} alt={item.name} style={{ width: '300px', height: '350px' }} />
            <p >{item.name}</p>
          </div>
        ))}
        </div>
      {/* </ul> */}

        <div className="categories">
          {categories.map((category) => (
            <div key={category.name} className="category-card">
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>




      
     
    </div>
  );
};

export default Marketplace;