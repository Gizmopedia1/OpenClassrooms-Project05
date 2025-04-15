import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.css'
import App from './pages/App/App.jsx'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

 
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
          <Nav />
            <App />
          <Footer />
        </Router>
    </React.StrictMode>,
)