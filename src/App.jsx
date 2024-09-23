import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductListing from './pages/ProductItem/ProductListing'

function App() {

  return (
    <>
      <Routes>
        <Route path="/productitem" element={<ProductListing />} />
      </Routes>
    </>
  )
}

export default App
