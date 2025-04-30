import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './main.scss'
import App from './pages/App/App.jsx'

 
ReactDOM.createRoot(document.getElementById("root")).render(
        <BrowserRouter  basename="/OpenClassrooms-Project05">
            <App />
        </BrowserRouter>
)

// index.js ou main.jsx
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter basename="/nom-du-repo">
//     <App />
//   </BrowserRouter>
// );