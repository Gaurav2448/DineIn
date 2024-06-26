import React from 'react';

import { Navbar } from './components';
import Home from './Routes/Home'
import Book from './Routes/Book'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs, Footer, Laurels, SpecialMenu } from './container';


const App = () => (
  <div>
    <BrowserRouter>
      
      <Navbar/>
      
        <Routes>

          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<AboutUs/>}/>
          <Route path='/Menu' element={<SpecialMenu/>}/>
          <Route path='/Awards' element={<Laurels/>}/>
          <Route path='/Book' element={<Book/>}/>

        </Routes>

        <Footer/>
    
    </BrowserRouter>

  </div>
);

export default App;
