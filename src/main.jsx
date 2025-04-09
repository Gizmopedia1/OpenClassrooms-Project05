import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.css'
import App from './pages/App/App.jsx'
import APropos from './pages/APropos/APropos.jsx'
import Page404 from './pages/Page404/Page404.jsx'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

 
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/404" element={<Page404 />} />
          </Routes>
          <Footer />
        </Router>
    </React.StrictMode>,
)