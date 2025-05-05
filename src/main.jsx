import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppProvider from './contexts/AppContext.jsx'
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
        <CssBaseline />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
)
