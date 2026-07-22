import Navbar from "./components/Navbar"
import Product from "./pages/Product"
import ProductDetails from "./pages/ProductDetails"
import Home from "./pages/Home"
import { Route,Routes } from "react-router-dom"
function App() {

  return (
    <>
    <Navbar/>

    <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/product" element={<Product/>} />
     <Route path="/product/:id" element={<ProductDetails/>} />

    </Routes>
    </>
  )
}

export default App
