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
        
      </Routes>
      
      <Footer />  
    </>
  );
}

export default App;
