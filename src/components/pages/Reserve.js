import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reserve.css'
import axios from 'axios'

export default function Reserve() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhno] = useState('');
    const [nocustomer, setNocustomer] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleReserve = async () => {
        await axios.post('http://localhost:8008/api/reservations/reserve', { name: name, nocustomer: nocustomer, email: email, phno: phno, date: date, time: time })
            .then((data) => {
                //localStorage.setItem('login',data.data.success);
                console.log('Signed up successfully');
                navigate('/');
            })
            .catch((err) => console.log(err))
    };
    return (
        <div className="reserve-container">
            <h1>Book Your Seat, Savor the Experience: Reserve Your Table Today!</h1>
            <div className="reserve-form">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder='Enter Name'
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder='Enter Email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="phno">Phone Number</label>
                <input
                    type="number"
                    id="phno"
                    value={phno}
                    placeholder='Enter Phone Number'
                    onChange={(e) => setPhno(e.target.value)}
                    required
                />
                <label htmlFor="nocustomer">Number Of Guests</label>
                <input
                    type="number"
                    id="guests"
                    value={nocustomer}
                    placeholder='Enter Number Of Guests'
                    onChange={(e) => setNocustomer(e.target.value)}
                    required
                />
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    placeholder='Enter Date'
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <label htmlFor="time">Time</label>
                <input
                    type="time"
                    id="time"
                    value={time}
                    placeholder='Enter Time'
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
                <button type="submit" onClick={handleReserve}>Make Reservation</button>
            </div>
        </div>
    );
}