import React from 'react';
import './App.css';
import './swiper-bundle.min.css'
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Teams from './components/Teams';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Footer from './components/Footer';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    
<div className="App">
      <BrowserRouter>
      
      <Navbar></Navbar>
      <Route exact path="/">
        <Header></Header>
        <About></About>
        <Qualification></Qualification>
        <Skills></Skills>
        <Experience></Experience>
        <Teams></Teams>
        <Contact></Contact>
        <Footer></Footer>
      </Route>
       {/* <Header></Header> */}
      {/* <Routes> */}
         {/* <Route path="/" element={<Header />} />
         <Route path="/about" element={<About/>} />
         <Route path="/qualification" element={<Qualification/>} />
         <Route path="/skills" element={<Skills/>} />
         <Route path="/projects" element={<Experience/>} />
         <Route path="/contact" element={<Contact/>} />
   */}

          
          {/* <Route exact Path="/about"><About></About></Route>
          <Route exact Path="/qualification"><Qualification></Qualification></Route>
          <Route exact Path="/skills"><Skills></Skills></Route>
          <Route exact Path="/projects"><Experience></Experience></Route>
          <Route exact Path="/contact"><Contact></Contact></Route> */}
        {/* </Routes> */}
        
      </BrowserRouter>
</div>
      
    
  );
}

export default App;
