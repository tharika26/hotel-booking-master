import React, { useState, useEffect } from 'react';
import './Restaurant.css';

const Restaurant = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    'styles/rest_1.jpeg',
    'styles/rest_2.jpeg',
    'styles/rest_3.jpeg'
  ];

  // Auto Slide Functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="restaurant-page">
      <div className="restaurant-container">
        
        {/* Slideshow Section */}
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === slideIndex ? 'active-slide' : ''}`}>
              <img src={`/${slide}`} alt={`Restaurant Slide ${index + 1}`} />
              <div className="slide-number">{index + 1} / {slides.length}</div>
              <div className="slide-caption">சுருளி விலாஸ் உணவகம்</div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="dot-container">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === slideIndex ? 'active-dot' : ''}`}
              onClick={() => setSlideIndex(index)}
            ></span>
          ))}
        </div>

        {/* Content Section */}
        <div className="restaurant-row">
          <div className="restaurant-col">
            <h3 className="restaurant-title">சுருளி விலாஸ் உணவகம்</h3>
            <p className="restaurant-text">
              சுருளி விலாஸில் உள்ள சுருளி உணவகத்திற்கு வரவேற்கிறோம், இது முன்னணி உணவகங்களில் ஒன்றாகும். எங்கள் உணவகம் வரவேற்கத்தக்க சூழல் மற்றும் குற்றமற்ற சேவையுடன் மகிழ்ச்சியான அனுபவத்தை வழங்குகிறது.
            </p>
            <p className="restaurant-text">
              எங்களின் உணவுப்பட்டியலில் பாரம்பரிய தமிழ் உணவுகளும், சர்வதேச சுவைகளும் இணைந்துள்ளன. ஒவ்வொரு தட்டிலும் அசாதாரணமான சுவைகளையும், பாரம்பரிய நறுமணங்களையும் அனுபவிக்கலாம்.
            </p>
            <p className="restaurant-text">
              🍲 <strong className="restaurant-strong">சிறப்பு உணவுகள்:</strong>  
              <ul className="special-menu">
                <li>நெய் சாப்பாடு</li>
                <li>பருப்பு வடை</li>
                <li>கறி குழம்பு</li>
                <li>அயிர் சோறு</li>
                <li>அல்வா, குல்ஃபி போன்ற சுவையான இனிப்புகள்</li>
              </ul>
            </p>
            <p className="restaurant-text">
              🎉 <strong className="restaurant-strong">பிரத்தியேக நிகழ்ச்சிகளுக்கு:</strong>  
              எங்கள் உணவகம் பிறந்தநாள் கொண்டாட்டங்கள், திருமண விருந்து, கார்ப்பரேட் மீட்டிங் போன்றவற்றிற்கான தனியார் அறைகள் மற்றும் சிறப்பு மெனு வழங்குகிறது.
            </p>
            <p className="restaurant-text">
              🍽️ <strong className="restaurant-strong">Fine Dining Experience:</strong>  
              அற்புதமான சுவைகள் மற்றும் அன்பான விருந்தோம்பலத்துடன் ஒரு இனிமையான உணவுப் பயணத்தை அனுபவிக்கலாம்.
            </p>
            <p className="restaurant-text">
              🍰 <strong className="restaurant-strong">இனிப்பு சுவைகள்:</strong>  
              சாப்பாட்டின் முடிவுக்கு பிறகு, எங்கள் கையால் செய்யப்பட்ட இனிப்புகள் உங்கள் உணவுப் பயணத்தை மேலும் இனிமையாக்கும்.
            </p>
            <p className="restaurant-text">
              <em className="restaurant-em">சுருளி விலாஸ் உணவகத்திற்கு வருகை தாருங்கள்! உங்கள் சுவையான நினைவுகளை உருவாக்க நாங்கள் ஆவலுடன் காத்திருக்கிறோம்.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
