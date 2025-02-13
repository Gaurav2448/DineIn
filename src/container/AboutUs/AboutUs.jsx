import React from 'react';

import { images } from '../../constants'

import Chef from '../Chef/Chef';

import './AboutUs.css';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';
import Laurels from '../Laurels/Laurels';
import Intro from '../Intro/Intro';

const AboutUs = () => (

  <>

  <div className="app__aboutus app__bg flex__center section__padding" id="aboutus">
    
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
      
        <h1 className="headtext__cormorant">About us</h1>

        <img src={ images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>

        <button type="button" className="custom__button">Know More</button>

      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={ images.knife } alt="about_knife" />
      </div>


      <div className="app__aboutus-content_history">
      
        <h1 className="headtext__cormorant">History</h1>

        <img src={ images.spoon} alt="about_spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>

        <button type="button" className="custom__button">Know More</button>

      </div>

    </div>

  </div>

  <Chef/>
  <Intro/>
  

  </>


);

export default AboutUs;
