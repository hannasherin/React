import React from 'react'
import "./Dashboard.css"
import { Link ,Outlet} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='main-dash'>
    <div className='main'>
      <h1>Dashboard</h1>
   
      <ul>
        
        <li><Link to="profile" style={{textDecoration:"none",color:"white"}}> Profile</Link></li>
        <li><Link to="report" style={{textDecoration:"none",color:"white"}}>Report</Link></li>
        <li><Link to="settings" style={{textDecoration:"none",color:"white"}} >Settings</Link> </li>
        
      </ul>
      
    </div>
    <Outlet/>
    
    </div>
  )
}

export default Dashboard
