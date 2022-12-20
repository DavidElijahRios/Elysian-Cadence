// import background styling
import "./index.css";
// import react
import React from 'react';
// need ability to write routes for web page
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./pages/header/header.js"
import Home from "./pages/home/home.js"
import Footer from "./pages/footer/footer.js"
import MeetBand from "./pages/meetBand/meetBand.js";
import Contact from "./pages/contact/contact.js";
import Music from "./pages/music/music.js";
import Shop from "./pages/shop/shop.js";

function App() {
  return (
    <div className="App">
    
      <Router>
       <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meetBand" element={<MeetBand />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
       <Footer />
      </Router>

    </div>
  );
}

export default App;
