import React from 'react';
import { Link } from 'react-router-dom';
import './Rooms.css';

const Room = ({ image, altText, link, roomType, rate }) => (
  <div className="room">
    <img src={image} alt={altText} />
    <div className="room-content">
      <h3>{roomType}</h3>
      <div className="rate">
        <h1>{rate}</h1>
        <p>+GST/Day</p>
      </div>
      <div className="book-now">
        <Link to={link}>
          <button type='button' className='cta-button'>Book Now</button>
        </Link>
      </div>
    </div>
  </div>
);

const Rooms = () => (
  <div className="container">
    <div className="header">
      <h1>விலாஸ் அறைகள்</h1>
    </div>
    <div className="rooms">
      <Room
        image="/styles/single.jpg"
        altText="SINGLE BEDROOM"
        link="/single"
        roomType="SINGLE BEDROOM"
        rate="Rs 2500"
      />
      <Room
        image="/styles/double.jpg"
        altText="DOUBLE BEDROOM"
        link="/double"
        roomType="DOUBLE BEDROOM"
        rate="Rs 3000"
      />
      <Room
        image="/styles/luxury.jpg"
        altText="LUXURY ROOM"
        link="/luxury"
        roomType="LUXURY ROOM"
        rate="Rs 4000"
      />
    </div>
  </div>
);

export default Rooms;
