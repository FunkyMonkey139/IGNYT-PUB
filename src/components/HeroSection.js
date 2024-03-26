import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import logo from './media/cc.jpg';
function HeroSection() {

  return (
    <div className='hero-container'>
      <div className='hero-background'>
      </div>
      <div className='hero-content'>
        <img src={logo} alt="Beer" className="logoimg" />
        <h1>IGNYT - THE BEER STATION</h1>
        <p>Welcome to the first Beer Station in South Bengaluru, located in Banashankari.</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            <Link
              to='/Reserve'
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                background: 'black',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px', /* Adjust the border-radius to make edges slightly curved */
                transition: 'background-color 0.3s, color 0.3s, padding 0.3s, border-radius 0.3s, text-decoration 0.3s', /* Add transition for all properties */
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'white';
                e.target.style.color = 'black';
                e.target.style.padding = '10px 20px';
                e.target.style.borderRadius = '5px'; /* Border radius */
                e.target.style.textDecoration = 'none'; /* Text decoration */
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'black';
                e.target.style.color = 'white';
                e.target.style.padding = '10px 20px';
                e.target.style.borderRadius = '5px'; /* Border radius */
                e.target.style.textDecoration = 'none'; /* Text decoration */
              }}
            >
              Reserve a Table
            </Link>

          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;