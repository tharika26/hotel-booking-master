import React from 'react';
import './Hotel.css';
import { Link } from "react-router-dom";

const Hotel = () => {
  return (
    <div className="homepage">
      <header className="hotel-header">
        <div className="header-content">
          <h1>Suruli Vilas</h1>
          <p>Luxury Stays Redefined</p>
        </div>
      </header>

      <main className="content">
        <section className="intro">
          <h2>Welcome to Your Dream Destination</h2>
          <p>
            Experience the epitome of luxury and comfort at Suruli Vilas, where modern amenities meet warm, personalized service. Whether you're here for business or leisure, we ensure an unforgettable and comfortable stay.
          </p>
          <img src="/styles/hotel2.png" alt="Hotel Atrium" className="hotel-image" />
        </section>

        <section className="amenities">
          <h2>What We Offer</h2>
          <div className="amenities-grid">
            <div className="amenity amenity-1">
              <div className="amenity-icon">🏊</div>
              <h3>Swimming Pool</h3>
              <p>Dive into relaxation at our sparkling swimming pool.</p>
            </div>
            <div className="amenity amenity-2">
              <div className="amenity-icon">💆</div>
              <h3>Spa & Wellness</h3>
              <p>Rejuvenating treatments at our luxury spa center.</p>
            </div>
            <div className="amenity amenity-3">
              <div className="amenity-icon">🍽️</div>
              <h3>Gourmet Dining</h3>
              <p>Exquisite cuisines crafted by expert chefs.</p>
            </div>
            <div className="amenity amenity-4">
              <div className="amenity-icon">💪</div>
              <h3>Fitness Center</h3>
              <p>State-of-the-art fitness center, open 24/7.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready for an Unforgettable Stay?</h2>
            <p>Book your perfect room and start your luxury journey today</p>
            <Link to="/Rooms"><button className="cta-button">Explore Rooms</button></Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>📧 contact@surulivilas.com</p>
            <p>📱 +91 0123456789</p>
            <p>📍 7/13 Suruli Vilas, Madurai - 625001</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hotel;