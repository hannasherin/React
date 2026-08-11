import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Userslist from "./pages/Userslist"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Product from "./pages/Product"
import ProductList from "./pages/ProductList"
function App() {

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users"  element={<Userslist/>}/>
      <Route path="/about"  element={<About/>}/>
        <Route path="/product"  element={<Product/>}/>
      <Route path="/productlist"  element={<ProductList/>}/>

     </Routes>
    </>
  )
}

export default App
