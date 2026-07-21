import Navbar from "./components/Navbar"
import { Routes , Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import ApiProduct from "./Pages/ApiProduct"
import ProductDetails from "./Pages/ProductDetails"


function App() {
 

  return (
    <>
     <Navbar/>
     <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/apiproduct" element={<ApiProduct/>}/>
      <Route path="/apiproduct/:id" element={<ProductDetails/>}/>
     </Routes>
    </>
  )
}

export default App
