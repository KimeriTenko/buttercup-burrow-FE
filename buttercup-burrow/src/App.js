import React from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Store from "./components/Store";
import Category from "./components/Category";
import Contact from "./components/Contact";
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;