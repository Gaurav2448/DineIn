import React, { useState } from 'react'

import { SubHeading } from '../components';
import { images } from '../constants';
import './Book.css';

const Book = () => {

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    const { value } = event.target;
    const currentDate = new Date();
    const selectedDate = new Date(value);

    if (selectedDate > currentDate) {
      setSelectedDate(value);
    } else {
      alert('Please select a future date.');
      setSelectedDate('');
    }
  };


  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
  
    <div className="app__wrapper_info">
  
      <SubHeading title="Contact" />
  
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Booking</h1>
  
      <div className="app__wrapper-content">
  
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
  
      </div >

      <div>
      
      <form>

        <table >
        

        <tr style={{marginBottom: '2rem'}}>  
          <td><p className="p__cormorant" style={{ color: '#DCCA87' }}>Name :</p></td>
          <td><input type="text" className='input-box' style={{marginBottom: '2rem'}}/></td>
        </tr>

        

        <tr>
          <td><p className="p__cormorant" style={{ color: '#DCCA87' }}>Phone No. :</p></td>
          <td><input type="text" className='input-box'/></td>
        </tr>

      


        <tr>
          <td><p className="p__cormorant" style={{ color: '#DCCA87' }}>Email Id :</p></td>
          <td><input type="email" className='input-box'/></td>
        </tr>


        <tr>
        <td><p className="p__cormorant" style={{ color: '#DCCA87' }}>Date :</p></td>
        
        <td><input
        type="date"
        id="dateInput"
        value={selectedDate}
        className='input-box'
        onChange={handleDateChange}
        /></td>

        </tr>

  

        <tr>
        <td><p className="p__cormorant" style={{ color: '#DCCA87' }}>Time :</p></td>
          
        <td>
          <select className='input-box'>

            <option value="0">---Default---</option>
            <option value="1">18:00 - 19:00</option>
            <option value="2">19:00 - 20:00</option>
            <option value="3">20:00 - 21:00</option>
            <option value="4">21:00 - 22:00</option>
            <option value="5">22:00 - 23:00</option>

          </select>
        </td>
        </tr>



        </table>

    </form>

      </div>
  
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Appointment</button>
  
    </div>


    <div className="app__wrapper_img">
  
      <img src={images.findus} alt="finus_img" />
  
    </div>
  
  </div>
  )
}

export default Book
