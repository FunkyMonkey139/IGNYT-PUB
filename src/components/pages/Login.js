import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpGenerated, setOtpGenerated] = useState(false);

  const handlePhoneSubmit = () => {
    // Generate OTP when phone number is submitted
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(generatedOtp.toString());
    setOtpGenerated(true);
    prompt('Your OTP is ', generatedOtp);
  };

  const handleLogin = () => {
    if (!otpGenerated) {
      alert('Please enter phone number and click Submit first.');
      return;
    }

    if (otp === '') {
      alert('Please enter OTP.');
      return;
    }

    // Check if entered OTP matches the generated OTP
    if (otp === otp.toString()) {
      navigate('/');

    } else {
      alert('Incorrect OTP. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <label htmlFor="Phno"><b>Phone Number</b></label>
        <input
          type="number"
          placeholder="Enter Phone Number"
          name="Phno"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        {/* Display the "Login" button for entering phone number */}
        {!otpGenerated && (
          <button type="button" onClick={handlePhoneSubmit}
            style={{
              padding: '8px 16px', // Adjust padding to make the button smaller
              borderRadius: '8px', // Apply rounded edges
              fontSize: '14px', // Adjust font size
              marginTop: '10px' // Add space above the button
            }}>Login</button>
        )}

        {otpGenerated && (
          <>
            <label htmlFor="otp"><b>OTP</b></label>
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            {/* Display the "Login" button for entering OTP */}
            <button type="button" onClick={handleLogin}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '14px',
                marginTop: '10px'
              }}
            >Login</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;