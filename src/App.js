import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from './MyComponents/Footer';
// import {TodoItem} from './MyComponents/TodoItem';

import { Routes, Route } from "react-router-dom"
import { Home } from './MyComponents/Home';
import { About } from './MyComponents/About';

import React from 'react';


function App() {

  return (
    <>

      <Header title="Notes For Students" searchBar={true} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
