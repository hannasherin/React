import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProvider from './Context/UserContext.jsx'
import ThemeProvider from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <App />
        </ThemeProvider>
    </UserProvider>
   
  </StrictMode>,
)
