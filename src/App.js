import React from 'react';

import SignupPage from './Routes/signup';
import { Navbar } from './components';
import Home from './Routes/Home'
import Book from './Routes/Book'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs, Footer, Laurels, SpecialMenu } from './container';
import Login from './Routes/Login';
import { Logout } from './Routes/Logout';

import MaybeShowComp from './Routes/MaybeShowComp';

const App = () => (
  <div>
    <BrowserRouter>
      
      <MaybeShowComp>
        <Navbar/>
      </MaybeShowComp>
      
      
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<AboutUs/>}/>
          <Route path='/Menu' element={<SpecialMenu/>}/>
          <Route path='/Awards' element={<Laurels/>}/>
          <Route path='/Book' element={<Book/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          
          <Route path='/login' element={<Login/>}/>
          
          <Route path='/Logout' element={<Logout/>}/>
          
        </Routes>

        <MaybeShowComp>
          <Footer/>
        </MaybeShowComp>

    </BrowserRouter>

  </div>
);

export default App;
