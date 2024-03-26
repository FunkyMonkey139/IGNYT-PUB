import React, { useEffect,useState } from 'react';
import './Food.css';
import axios from 'axios'

function Mocktails() {
  const [boardingServices,setBoardingServices] = useState([]);
  useEffect(()=>{
    const getBoardingServices=async()=>{
      await axios.get('http://localhost:8080/boarding/getAllBoarding')
      .then((data)=>{
        setBoardingServices(data.data);
      })
      .catch((err)=>console.log(err))
    }
    getBoardingServices();
  },[])
  
  return (
    <div className="food-container">
      <h1><i>Mocktails</i></h1>
      <table className="food-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Image</th>
            <th>Price</th>
            <th>Add to Cart</th>

          </tr>
        </thead>
        <tbody>
          {boardingServices.map((service, index) => (
            <tr key={index}>
              <td>{service.place_id}</td>
              <td><img src={service.photo} className="food-pic"></img></td>
              <td>{service.name}</td>
              <td>{service.city}</td>
              <td>{service.b_email}</td>
              <td>{service.openingHours}</td>
              <td>{service.services}</td>
              <td>{service.reviews}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Mocktails;
