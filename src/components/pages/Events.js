import React from 'react';
import './Events.css';
import event1 from "../media/ipl.jpeg"
import event2 from "../media/happyhour.jpeg"
import event3 from "../media/1p1.jpeg"
function Events() {
    return (
        <div style={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ maxWidth: '600px', width: '100%', padding: '20px' }}>
                <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '10px' }}>
                    <img src={event3} alt="Card 1" style={{ width: '100%', marginBottom: '10px', borderRadius: '5px' }} />
                    <p style={{ fontSize: '17px' }}>
                        Cheers to the weekday vibes!<br />

                        Buy 1, Get 1 FREE on our refreshing beers from 12 PM to 5 PM.

                    </p>

                </div>
                <div style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px', borderRadius: '10px' }}>
                    <img src={event1} alt="Card 2" style={{ width: '100%', marginBottom: '10px', borderRadius: '5px' }} />
                    <p style={{ fontSize: '17px' }}>
                        Score big with 50% OFF* on your bill via Zomato!<br />
                        Reserve your spot now: +91 82177 79517.<br />
                        Don't miss out on the IPL Fiesta at our pub!
                    </p>
                </div>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
                    <img src={event2} alt="Card 3" style={{ width: '100%', marginBottom: '10px', borderRadius: '5px' }} />
                    <p style={{ fontSize: '17px' }}>
                        Experience the ultimate happiness at IGNYT with our Happy Hours, Monday to Friday! Indulge in unlimited beer for just Rs. 499.<br />
                        Sip, savor, and socialize in the heart of Bangalore city with your favorite brews.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Events; 
