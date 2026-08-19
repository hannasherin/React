import { Routes ,Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import CreateTask from "./pages/CreateTask"
import TaskList from "./pages/TaskList"
import EditTask from "./pages/EditTask"

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<CreateTask/>}/> 
         <Route path="/tasklist" element={<TaskList/>}/> 
         <Route path="/edit-task/:id" element={<EditTask/>}/> 

      </Routes>

    
    </>
  )
}

export default App
