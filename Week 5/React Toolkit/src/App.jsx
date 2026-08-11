import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Userslist from "./pages/Userslist"
import Navbar from "./components/Navbar"
function App() {

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users"  element={<Userslist/>}/>
     </Routes>
    </>
  )
}

export default App
