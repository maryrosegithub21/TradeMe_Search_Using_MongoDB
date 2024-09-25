import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './common/Navbar'; 
import Footer from './common/Footer';

import HomePage from './pages/Search/HomePage';
// import ProductListing from './pages/ProductItem/ProductListing';

function App() {
  return (
    <>
     <Navbar />
     
      <Routes>
        <Route path="/" element={<HomePage />} />
       
      </Routes>

      <Footer />
    </>
  );
}

export default App;