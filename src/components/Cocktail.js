import React, { useEffect, useState } from 'react';
import './Food.css';
import axios from 'axios'
import cartimg from './media/shopping-cart.png'
function Cocktail() {
  const [showBeer, setBeers] = useState([]);
  let cart;
  let count = 0;
  const handleCart = (service) => {
    if (localStorage.getItem('cart') && count == 0) {

      cart = JSON.parse(localStorage.getItem('cart')) || []
      count = 1;

    }
    cart.push(service);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  useEffect(() => {
    const getBeers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8008/api/displayDish/showBeer"
        );
        setBeers(response.data.beers);
      } catch (error) {
        console.error("Error fetching beer details:", error);
      }
    };
    getBeers();
  }, []);

  return (
    <div className="food-container">
      <h1><i>Signature Beers</i></h1>
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
          {showBeer.map((service, index) => (
            <tr key={index}>
              <td><img src={service.img} className="boarding-pic" style={{ width: '100px', height: '100px' }} /></td>
              <td style={{ fontSize: '1.2em', textAlign: 'center' }}>{service.name}</td>
              <td style={{ fontSize: '1.2em', textAlign: 'center', width: '25%' }}>{service.price} Rs.</td>
              <td><img src={cartimg} className="boarding-pic" style={{ width: '30px', height: '30px' }} onClick={() => { handleCart(service) }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cocktail;
