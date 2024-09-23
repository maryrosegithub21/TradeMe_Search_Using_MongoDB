import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductItem from './pages/ProductItem/ProductItem';
import Navbar from './common/Navbar'; 
import Footer from './common/Footer';

function App() {
  return (
    <>
      <Navbar />  
      <Routes>
        <Route path="/productitem" element={<ProductItem />} />
        {/* Add more routes as needed */}
      </Routes>
      {/* Divider for spacing between content and footer */}
      <div className="footer-divider"></div>
      <Footer />  {/* Add the Footer here */}
    </>
  );
}

export default App;
