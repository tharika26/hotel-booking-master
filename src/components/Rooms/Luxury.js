import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Rooms.css';

const Luxury = () => {
    const navigate = useNavigate();

    const handleBooking = () => {
        const roomDetails = {
            roomType: "LUXURY BEDROOM",
            price: "INR 4,000.00",
            features: [
                "Accommodation",
                "Breakfast",
                "Free Wi-Fi",
                "Room Service",
                "Pool Access"
            ],
            maxCapacity: 4,
            image: "/styles/luxury.jpg"
        };

        navigate("/payment", { state: roomDetails });
    };

    return (
        <div className="room-details-container">
            <div className="image-section">
                <img src="/styles/luxury.jpg" alt="Luxury Bedroom" />
            </div>
            <div className="details-section">
                <h2>LUXURY BEDROOM</h2>
                <p className="price">
                    From <span>INR 4,000.00</span> / Day
                    <br />(Exclusive of Taxes)
                </p>
                <ul className="custom-list">
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Accommodation</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Breakfast</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Free Wi-Fi</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Room Service</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Pool Access</li>
                </ul>
                <div className="capacity-info">
                    <div>
                        <FontAwesomeIcon icon={faUser} /> Max. Capacity: 4 Guests
                    </div>
                </div>
                <button className="add-room" onClick={handleBooking}>BOOK ROOM</button>
            </div>
        </div>
    );
};

export default Luxury;
