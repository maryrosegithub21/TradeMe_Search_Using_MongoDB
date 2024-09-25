import React, { useState } from 'react';
import styles from '../components/Marketplace.module.css';

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
  const [categoryShow, setCategoryShow] = useState(true);
  const [results, setResults] = useState([]);
  

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setCategoryShow(false)
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCategoryShow(false)
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
    <>
     <h1>Shop new and used items for sale</h1>
      <div className={styles.marketPlace} >
     
      <div className={styles.searcBar}>
      <div className={styles.inputWrapper}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8c1.85 0 3.55-.63 4.9-1.69l5.39 5.39 1.41-1.41-5.39-5.39C17.37 13.55 18 11.85 18 10c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#444444"/>
      </svg>

      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Search for auctions"
      />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6L18 18" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
     
      <div className={styles.buttonContainer}>
      <button onClick={handleSearch}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8c1.85 0 3.55-.63 4.9-1.69l5.39 5.39 1.41-1.41-5.39-5.39C17.37 13.55 18 11.85 18 10c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#444444"/>
      </svg> 
      Search
      </button>
      </div>

      </div>

        <div className={styles.categoryDropDown}>
          <select onChange={handleCategoryChange}>
            <option>Browse by category</option>
              {categories.map((category, index) => (
            <option key={index} value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>
     </div>
     </div>
     <h1>Explore Marketplace</h1>
      <div className={styles.exploreSection}>
        
        <div className={styles.categories}>
            {results && results.map((item) => (
                <div key={item._id} className={styles.categoryCard}>
                <img src={`http://localhost:3000/public/${item.image}`} alt={item.name} />
                <p >{item.name}</p>
                </div>
            ))}
        </div>
    {categoryShow && 
        <div className={styles.categories}>
            {categories.map((category) => (
            <div key={category.name} className={styles.categoryCard}>
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
            ))}
        </div>
    }
      </div>
    
      </>
  );
};

export default Marketplace;