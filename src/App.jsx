import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Explicit route to error page */}
        <Route path="/error-page" element={<ErrorPage />} />
        {/* Catch-all for unknown routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App