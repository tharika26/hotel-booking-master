import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import Hotel from './components/Hotel/Hotel';
import Rooms from './components/Rooms/Rooms';
import Single from './components/Rooms/Single';
import Double from './components/Rooms/Double';
import Luxury from './components/Rooms/Luxury';
import Restaurant from './components/Restaurant/Restaurant';
import Payment from './components/Payments/Payment';
import FeedQues from './components/Feed&Ques/FeedQues';
import './styles/global.css';

// Layout Component to Conditionally Render Navbar
const Layout = ({ children }) => {
  const location = useLocation();
  const noNavbarRoutes = ['/payment']; // Add paths where Navbar should be hidden

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Hotel />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/single" element={<Single />} />
          <Route path="/double" element={<Double />} />
          <Route path="/luxury" element={<Luxury />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<FeedQues />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
