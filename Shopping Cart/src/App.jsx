import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart"
import ProductList from "./pages/ProductList"
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
