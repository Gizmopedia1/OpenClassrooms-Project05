import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './main.scss'
import App from './pages/App/App.jsx'
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/OpenClassrooms-Project05">
    <App />
  </BrowserRouter>
);