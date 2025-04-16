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
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'


function App() {
  return (
    <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/details/:id" element={<LogementTemplate />} />
          </Routes>
          <Footer />
    </div>

  )
}

export default App
