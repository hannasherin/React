import { Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile"
import Settings from "./components/Settings"
import Report from "./components/Report"
function App() {

  return (
    <>
      <Routes>
        {/* parent LAyout  */}
        <Route path="/dashboard" element={<Dashboard/> }>
        {/* child Layout  */}
        <Route path="profile" element={ <Profile/>} />
        <Route path="settings" element={<Settings/> } />
        <Route path="report" element={<Report/> } />
        
        </Route>
      </Routes>

    </>
  )
}

export default App
