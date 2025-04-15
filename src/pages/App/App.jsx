import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from '../Home/Home.jsx'
import LogementTemplate from '../LogementTemplate/LogementTemplate.jsx'
import APropos from '../aPropos/APropos.jsx'
import Page404 from '../Page404/Page404.jsx'


function App() {
  return (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/details/:id" element={<LogementTemplate />} />
          </Routes>
  )
}

export default App
