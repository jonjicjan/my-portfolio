
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import your Navbar component
import Home from './components/Home';  // Create these pages as needed
import About from './components/About';
import Services from './components/Services';
// import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import NoteState from './context/notes/NoteState';

function App() {


  return (
   <>
   <NoteState>
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      {/*   <Route path="/portfolio" element={<Portfolio />} />  */ }
        <Route path="/myprojects" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
    </Router>
   </NoteState>
   </>
  );
}

export default App;
