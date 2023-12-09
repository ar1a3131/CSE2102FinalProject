import React from 'react';
import './MainPage.css';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();
  
    // Inline style for the background image
    const containerStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/worldflags.jpg)`,
      backgroundPosition: 'center',
    

    };
  
    return (
      <div className="main-container" style={containerStyle}>
        <div className="main-buttons">
          <button className="button" onClick={() => navigate('/topic-selection')}>Quiz Bank</button>
        </div>
      </div>
    );
};
  
export default MainPage;

