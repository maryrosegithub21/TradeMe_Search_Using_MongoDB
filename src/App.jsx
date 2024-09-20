import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductItem from './pages/ProductItem/ProductItem'

function App() {

  return (
    <>
      <Routes>
        <Route path="/productitem" element={<ProductItem />} />
      </Routes>
    </>
  )
}

export default App
