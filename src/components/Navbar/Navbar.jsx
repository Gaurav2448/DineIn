import React, { useState } from 'react';
import { useFirebase } from '../../context/Firebase';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useFirebase();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app_navbar'>
      <div className="app_navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      <ul className="app_navbar-links">
        <li className="p__opensans"><NavLink to='/'>Home</NavLink></li>
        <li className="p__opensans"><NavLink to='/about'>About Us</NavLink></li>
        <li className="p__opensans"><NavLink to='/menu'>Menu</NavLink></li>
        <li className="p__opensans"><NavLink to='/awards'>Awards</NavLink></li>
      </ul>

      <div className="app_navbar-login">
        <NavLink to='/book' className="p__opensans">Book</NavLink>
        <div/>
        {user ? (
          <li onClick={logout} className="p__opensans"><NavLink to='/logout'>Logout</NavLink></li>
        ) : (
          <>
            <NavLink to='/signup' className="p__opensans">Signup</NavLink>
            <div />
            <NavLink to='/login' className="p__opensans">Login</NavLink>
          </>
        )}
      </div>

      <div className="app_navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app_navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
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
  );
};

export default Navbar;
