import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Rooms.css';

const Single = () => {
    const navigate = useNavigate();

    const handleBooking = () => {
        const roomDetails = {
            roomType: "SINGLE BEDROOM",
            price: "INR 2,500.00",
            features: [
                "Accommodation",
                "Breakfast",
                "Free Wi-Fi"
            ],
            maxCapacity: 2,
            image: "/styles/single.jpg"
        };

        navigate("/payment", { state: roomDetails });
    };

    return (
        <div className="room-details-container">
            <div className="image-section">
                <img src="/styles/single.jpg" alt="Single Bedroom" />
            </div>
            <div className="details-section">
                <h2>SINGLE BEDROOM</h2>
                <p className="price">
                    From <span>INR 2,500.00</span> / Day
                    <br />(Exclusive of Taxes)
                </p>
                <ul className="custom-list">
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Accommodation</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Breakfast</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Free Wi-Fi</li>
                </ul>
                <div className="capacity-info">
                    <div>
                        <FontAwesomeIcon icon={faUser} /> Max. Capacity: 2 Guests
                    </div>
                </div>
                <button className="add-room" onClick={handleBooking}>BOOK ROOM</button>
            </div>
        </div>
    );
};

export default Single;
