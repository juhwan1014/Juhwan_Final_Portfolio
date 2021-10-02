import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar></Navbar>
      <Route exact path="/">
      <div className="App-header">
      <Header></Header>
      </div>
      
      <div className='About'>
        
        <About></About>
      </div>
    {/*  <div className='work'>
        <Work></Work>
      </div>
  */}
  <div className='Experience'>
        <Experience></Experience>
      </div>
      <div className='Skills'>
        <Skills></Skills>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
      <div className='footer'>
        <Footer></Footer>
      </div>
      </Route>
     
      </Router>
      
    </div>
  );
}

export default App;
