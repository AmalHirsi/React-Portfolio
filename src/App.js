import React, { useState } from 'react';
import './App.css';
// import Navigation from './components/Navigation';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="sections">
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>  
      </div>
      <div className="footer">
      <Footer></Footer>  
      </div>
      </div>  
  )
}

export default App;