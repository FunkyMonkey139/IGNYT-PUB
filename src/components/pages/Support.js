import React from 'react';
import './Support.css';


function Support() {
  const contactNumber = '+91 8217779517';
  const instagramId = 'ignyt_thebeerstation';

  const handlePhoneClick = () => {
    window.location.href = 'tel:${contactNumber}';
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/${instagramId}', '_blank');
  };


  return (
    <div className='support-bg'>
      <div className="support-container">
        <h1>About Us</h1>
        <p>Welcome to Ignyt - The Beer Lounge, where passion for beer meets exceptional hospitality.
          This is a destination for beer enthusiasts seeking an extraordinary experience.<br></br>
          At Ignyt, we pride ourselves on offering a curated selection of premium craft beers,
          meticulously chosen to delight the discerning palate. Whether you're a seasoned beer connoisseur or new to
          the craft beer scene, our knowledgeable staff is here to guide you through our diverse range of brews, ensuring each visit is a journey of discovery.
          <br></br>Ignyt is more than just a beer lounge, it's a community hub where friends gather, stories are shared, and memories are made.
          Our vibrant atmosphere, paired with live music and events, creates the perfect setting for socializing and unwinding after a long day.
          <br></br>Committed to excellence in service and quality, Ignyt is dedicated to providing an unforgettable experience.
          Join us at Ignyt - The Beer Lounge, and let us elevate your passion for beer to new heights.
          <br></br>Cheers to great beer and unforgettable moments!</p>
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p><strong>Contact: </strong><span onClick={handlePhoneClick}>{contactNumber}</span></p>
          <p><strong>Instagram: </strong><span onClick={handleInstagramClick}>{instagramId}</span></p>
        </div>
        <h1>Locate Us</h1>
        <p>IGNYT The Beer Station,<br></br>
          178/6 14th main road, 20th, 50th Main Rd,<br></br>
          Kumaraswamy Layout, Bengaluru, Karnataka, India, 560078</p>
      </div>
    </div>
  );
}

export default Support;
