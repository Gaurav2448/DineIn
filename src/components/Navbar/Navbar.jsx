import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu , setToggleMenu] = useState(false);

  return (
  <nav className='app_navbar'>
    <div className="app_navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app_navbar-links'>
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#About">About</a></li>
      <li className="p__opensans"><a href="#Menu">Menu</a></li>
      <li className="p__opensans"><a href="#awards">Awards</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>

    <div className="app_navbar-login">
      <a href="#login" className='p__opensans'>Log In / Register</a>

      <div/>

      <a href="/" className="p__opensans">Book table</a>
    </div>

  <div className="app_navbar-smallscreen"> 
  
    <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

      {toggleMenu && (

      <div className="app_navbar-smallscreen_overlay flex__center slide-bottom">

      <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>

      <ul className='app_navbar-smallscreen_links'>
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#About">About</a></li>
        <li className="p__opensans"><a href="#Menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>

    </div>
  )}
  
  </div>



  </nav>
)
}

export default Navbar;
