import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './main.scss'
import App from './pages/App/App.jsx'

 
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router basename="/OpenClassrooms-Project05">
            <App />
        </Router>
    </React.StrictMode>,
)