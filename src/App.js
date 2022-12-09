import React  from 'react';
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
      <Navbar />
      <div className="sections">
        <About />
        <Projects />
        <Contact /> 
      </div>
      <div className="footer">
      <Footer />  
      </div>
      </div>  
  )
}

export default App;