import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Payment.css";

const Payment = () => {
  const location = useLocation();
  const roomDetails = location.state;

  const [paymentDetails, setPaymentDetails] = useState({
    checkInDate: "",
    checkOutDate: "",
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const payload = {
        ...paymentDetails,
        roomDetails: roomDetails
      };

      const response = await axios.post("https://hotel-booking-k5iy.onrender.com/api/payment", payload);
      console.log(response.data);
      setPaymentDetails({
        checkInDate: "",
        checkOutDate: "",
        name: "",
        email: "",
        phoneNumber: "",
      });
      setResponseMessage("Booking details sent successfully!");
    } catch (error) {
      console.error("Error sending booking details", error);
      setResponseMessage("Failed to send booking details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cc">
      <header>
    <h1>சுருளி விலாஸ்</h1>
  </header>
    <div className="payment-wrapper">
      
      <div className="payment-container">
        {/* Room Details */}
        {roomDetails && (
          <div className="room-details">
            <img src={roomDetails.image} alt={roomDetails.roomType} className="room-image" />
            <h2 className="room-title">{roomDetails.roomType}</h2>
            <p className="room-price">Price: {roomDetails.price} / Day</p>
            <ul className="room-features">
              {roomDetails.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <p className="room-capacity">Max Capacity: {roomDetails.maxCapacity} Guests</p>
          </div>
        )}

        {/* Payment Form */}
        <div className="payment-details">
          <h2 className="payment-title">Booking Details</h2>
          <form onSubmit={handleSubmit} className="payment-form">
            <input
              type="text"
              name="name"
              value={paymentDetails.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="payment-input"
            />
            <input
              type="email"
              name="email"
              value={paymentDetails.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="payment-input"
            />
            <input
              type="tel"
              name="phoneNumber"
              value={paymentDetails.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="payment-input"
            />
            <label htmlFor="checkInDate" className="payment-label">Check-In Date</label>
            <input
              type="date"
              name="checkInDate"
              value={paymentDetails.checkInDate}
              onChange={handleChange}
              required
              className="payment-input"
            />
            <label htmlFor="checkOutDate" className="payment-label">Check-Out Date</label>
            <input
              type="date"
              name="checkOutDate"
              value={paymentDetails.checkOutDate}
              onChange={handleChange}
              required
              className="payment-input"
            />
            <button type="submit" className="payment-button" disabled={loading}>
              {loading ? "Sending..." : "Confirm Booking"}
            </button>
          </form>
          {responseMessage && (
            <p className={responseMessage.includes("success") ? "success-message" : "error-message"}>
              {responseMessage}
            </p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Payment;
