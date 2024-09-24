// // import React, { useState, useEffect  } from 'react';
// // import './Marketplace.module.css';
// // import { FaSearch } from 'react-icons/fa';
// // import homeImage from '../../../assets/MarketPlace/home.png';
// // import antique from '../../../assets/MarketPlace/antique.png';
// // import art from '../../../assets/MarketPlace/art.png';
// // import babyGear from '../../../assets/MarketPlace/babygear.png';
// // import books from '../../../assets/MarketPlace/books.png';
// // import building from '../../../assets/MarketPlace/building.png';
// // import business from '../../../assets/MarketPlace/business.png';
// // import clothing from '../../../assets/MarketPlace/clothing.png';


// // const Marketplace = () => {
// //   const [input, setInput] = useState('');
// //   const [category, setCategory] = useState('');
// //   const [result, setResult] = useState('');
// //   const [texts, setTexts] = useState([]);

// //   const handleInputChange = (e) => {
// //     setInput(e.target.value);
// //   };

// //   const handleCategoryChange = (e) => {
// //     setCategory(e.target.value);
// //   };

// //   const handleSearch = async () => {
// //     try{
// //     const response = await fetch('http://localhost:5000/api/generate', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json'
// //       },
// //       body: JSON.stringify({ input, category })
// //     });

    
// //     if (!response.ok) {
// //       throw new Error('Failed to fetch data');
// //     }


// //     const data = await response.json();
// //     setResult(data.generatedText);
// //   } catch (error) {
// //     console.error('Error fetching data:', error);
// //   }
// //   };
// //   useEffect(() => {
// //     const fetchTextsByCategory = async () => {
// //       if (category) {
// //         try {
// //           const response = await fetch(`http://localhost:5000/api/texts/${category}`);
// //           if (!response.ok) {
// //             throw new Error('Failed to fetch texts');
// //           }
// //           const data = await response.json();
// //           setTexts(data);
// //         } catch (error) {
// //           console.error('Error fetching texts:', error);
// //         }
// //       }
// //     };

// //     fetchTextsByCategory();
// //   }, [category]);

// //   return (
// //     <div className="marketplace-container">
// //       <h1 className="header-h1">Shop new and used items for sale</h1>
// //       <div className="search-bar">
// //           <div className="input-container">
// //             <FaSearch className="search-icon" />
// //             <input
// //               type="text"
// //               value={input}
// //               onChange={handleInputChange}
// //               placeholder="Search input text"
// //             />
// //             <button onClick={handleSearch}>
// //             <FaSearch className="button-icon" /> Search
// //           </button>
// //           </div>
    
// //         <select value={category} onChange={handleCategoryChange}>
// //           <option value="">Browse by category</option>
// //           <option value="home-living">Home & Living</option>
// //           <option value="antiques-collectibles">Antiques & Collectibles</option>
// //           <option value="art">Art</option>
// //           <option value="baby-gear">Baby Gear</option>
// //           <option value="books-stationary">Books & Stationary</option>
// //           <option value="building-renovation">Building & Renovation</option>
// //           <option value="business-farming-industry">Business Farming & Industry</option>
// //           <option value="clothing-fashion">Clothing & Fashion</option>
// //         </select>
// //       </div>
// //       {result && <div className="result">{result}</div>}
// //       <h2 className="explore-header">Explore Marketplace</h2>
// //       <div className="texts-container">
// //         {texts.map((text, index) => (
// //           <div key={index} className="text-item">
// //             {text.text}
// //           </div>
// //         ))}
// //       </div>


// //       <div className="categories">
// //         <div className="category-card">
// //           <img  src={homeImage} alt="Home & Living" />
// //           <p>Home & Living</p>
// //         </div>
// //         <div className="category-card">
// //           <img src={antique} alt="Antiques & Collectibles" />
// //           <p>Antiques & Collectibles</p>
// //         </div>
// //         <div className="category-card">
// //           <img src={art} alt="Art" />
// //           <p>Art</p>
// //         </div>
// //         <div className="category-card">
// //           <img src={babyGear} alt="Baby Gear" />
// //           <p>Baby Gear</p>
// //         </div>
// //         <div className="category-card">
// //           <img src={books} alt="Books & Stationary" />
// //           <p>Books & Stationary</p>
// //         </div>
// //         <div className="category-card">
// //           <img src={building} alt="Building & Renovation" />
// //           <p>Building & Renovation</p>
// //         </div>
// //         <div className="category-card">
// //           <img src={business} alt="Business Farming & Industry" />
// //           <p>Business Farming & Industry</p>
// //         </div>
// //         <div className="category-card">
// //           <img src={clothing} alt="Clothing & Fashion" />
// //           <p>Clothing & Fashion</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Marketplace;

// import React, { useState, useEffect } from 'react';
// import './Marketplace.module.css';
// import { FaSearch } from 'react-icons/fa';
// import homeImage from '../../../assets/MarketPlace/home.png';
// import antique from '../../../assets/MarketPlace/antique.png';
// import art from '../../../assets/MarketPlace/art.png';
// import babyGear from '../../../assets/MarketPlace/babygear.png';
// import books from '../../../assets/MarketPlace/books.png';
// import building from '../../../assets/MarketPlace/building.png';
// import business from '../../../assets/MarketPlace/business.png';
// import clothing from '../../../assets/MarketPlace/clothing.png';

// const Marketplace = () => {
//   const [input, setInput] = useState('');
//   const [category, setCategory] = useState('');
//   const [result, setResult] = useState('');
//   const [texts, setTexts] = useState([]);

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/search', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ input, category })
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }

//       const data = await response.json();
//       setResult(data.results);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchTextsByCategory = async () => {
//       if (category) {
//         try {
//           const response = await fetch(`http://localhost:5000/api/texts/${category}`);
//           if (!response.ok) {
//             throw new Error('Failed to fetch texts');
//           }
//           const data = await response.json();
//           setTexts(data);
//         } catch (error) {
//           console.error('Error fetching texts:', error);
//         }
//       }
//     };

//     fetchTextsByCategory();
//   }, [category]);

//   return (
//     <div className="marketplace-container">
//       <h1 className="header-h1">Shop new and used items for sale</h1>
//       <div className="search-bar">
//         <div className="input-container">
//           <FaSearch className="search-icon" />
//           <input
//             type="text"
//             value={input}
//             onChange={handleInputChange}
//             placeholder="Search input text"
//           />
//           <button onClick={handleSearch}>
//             <FaSearch className="button-icon" /> Search
//           </button>
//         </div>
//         <select value={category} onChange={handleCategoryChange}>
//           <option value="">Browse by category</option>
//           <option value="home-living">Home & Living</option>
//           <option value="antiques-collectibles">Antiques & Collectibles</option>
//           <option value="art">Art</option>
//           <option value="baby-gear">Baby Gear</option>
//           <option value="books-stationary">Books & Stationary</option>
//           <option value="building-renovation">Building & Renovation</option>
//           <option value="business-farming-industry">Business Farming & Industry</option>
//           <option value="clothing-fashion">Clothing & Fashion</option>
//         </select>
//       </div>
//       {results.length > 0 && (
//         <div className="results">
//           {results.map((result, index) => (
//             <div key={index} className="result-item">
//               <h3>{result.name}</h3>
//               <p>{result.description}</p>
//             </div>
//           ))}
//         </div>
//       )}
//         <h2 className="explore-header">Explore Marketplace</h2>
//       <div className="texts-container">
//         {texts.map((text, index) => (
//           <div key={index} className="text-item">
//             {text.text}
//           </div>
//         ))}
//       </div>



//       <div className="categories">
//         <div className="category-card">
//           <img src={homeImage} alt="Home & Living" />
//           <p>Home & Living</p>
//         </div>
//         <div className="category-card">
//           <img src={antique} alt="Antiques & Collectibles" />
//           <p>Antiques & Collectibles</p>
//         </div>
//         <div className="category-card">
//           <img src={art} alt="Art" />
//           <p>Art</p>
//         </div>
//         <div className="category-card">
//           <img src={babyGear} alt="Baby Gear" />
//           <p>Baby Gear</p>
//         </div>
//         <div className="category-card">
//           <img src={books} alt="Books & Stationary" />
//           <p>Books & Stationary</p>
//         </div>
//         <div className="category-card">
//           <img src={building} alt="Building & Renovation" />
//           <p>Building & Renovation</p>
//         </div>
//         <div className="category-card">
//           <img src={business} alt="Business Farming & Industry" />
//           <p>Business Farming & Industry</p>
//         </div>
//         <div className="category-card">
//           <img src={clothing} alt="Clothing & Fashion" />
//           <p>Clothing & Fashion</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Marketplace;


// import React, { useState, useEffect } from 'react';
// import './MarketPlace.module.css';
// import { FaSearch } from 'react-icons/fa';

// const Marketplace = () => {
//   const [input, setInput] = useState('');
//   const [category, setCategory] = useState('');
//   const [results, setResults] = useState([]); // Changed from result to results
//   const [texts, setTexts] = useState([]);

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/search', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ input, category })
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }

//       const data = await response.json();
//       setResults(data.results); // Changed from setResult to setResults
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchTextsByCategory = async () => {
//       if (category) {
//         try {
//           const response = await fetch(`http://localhost:5000/api/auctions/${category}`);
//           if (!response.ok) {
//             throw new Error('Failed to fetch texts');
//           }
//           const data = await response.json();
//           setTexts(data);
//         } catch (error) {
//           console.error('Error fetching texts:', error);
//         }
//       }
//     };

//     fetchTextsByCategory();
//   }, [category]);

//   return (
//     <div className="marketplace-container">
//       <h1 className="header-h1">Shop new and used items for sale</h1>
//       <div className="search-bar">
//         <div className="input-container">
//           <FaSearch className="search-icon" />
//           <input
//             type="text"
//             value={input}
//             onChange={handleInputChange}
//             placeholder="Search input text"
//           />
//           <button onClick={handleSearch}>
//             <FaSearch className="button-icon" /> Search
//           </button>
//         </div>
//         <select value={category} onChange={handleCategoryChange}>
//           <option value="">Browse by category</option>
//           <option value="home-living">Home & Living</option>
//           <option value="antiques-collectibles">Antiques & Collectibles</option>
//           <option value="art">Art</option>
//           <option value="baby-gear">Baby Gear</option>
//           <option value="books-stationary">Books & Stationary</option>
//           <option value="building-renovation">Building & Renovation</option>
//           <option value="business-farming-industry">Business Farming & Industry</option>
//           <option value="clothing-fashion">Clothing & Fashion</option>
//         </select>
//       </div>
//       {results.length > 0 && (
//         <div className="results">
//           {results.map((result, index) => (
//             <div key={index} className="result-item">
//               <h3>{result.name}</h3>
//               <p>{result.description}</p>
//             </div>
//           ))}
//         </div>
//       )}
//       <h2 className="explore-header">Explore Marketplace</h2>
//       <div className="texts-container">
//         {texts.map((text, index) => (
//           <div key={index} className="text-item">
//             {text.text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marketplace;

// import React, { useState } from 'react';

// const Marketplace = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState(null);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(`/api/search-auctions/${searchTerm}`);
//       if (!response.ok) {
//         throw new Error('No auctions found with the given name.');
//       }
//       const data = await response.json();
//       setResults(data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       setResults([]);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search for auctions"
//       />
//       <button onClick={handleSearch}>Search</button>
//       {error && <p>{error}</p>}
//       <ul>
//         {results.map((item) => (
//           <li key={item._id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Marketplace;


import React, { useState } from 'react';

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
        // throw new Error('Failed to fetch data');
        throw new Error(`Failed to fetch data: ${errorText}`);

      }

      const data = await response.json();
      console.log('Fetched data:', data); // Added log
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
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
      <ul>
      {results && results.map((item) => (
          <li key={item._id}>
            <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marketplace;