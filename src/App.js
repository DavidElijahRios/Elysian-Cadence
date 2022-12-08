// import background styling
import "./index.css";
// import react
import React from 'react';
// need ability to write routes for web page
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./pages/header/header.js"
import Home from "./pages/home/home.js"
import Footer from "./pages/footer/footer.js"
import Contact from "./pages/contact/contact.js";

function App() {
  return (
    <div className="App">
    
      <Router>
       <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="meetBand" element={<Contact />} />
        </Routes>
       <Footer />
      </Router>

    </div>
  );
}

export default App;
