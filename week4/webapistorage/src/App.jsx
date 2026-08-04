import Register from "./features/auth/Register"
import Login from "./features/auth/Login"
import Home from "./features/Home/Home"
import { Routes,Route } from "react-router-dom"
function App() {

  return (
    <>

<Routes>
  <Route path="/" element={<Register />} />
  <Route path="/login" element={ <Login />} />
   <Route path="/home" element={ <Home />}/>
</Routes>
      
     
     

    </>
  )
}

export default App
