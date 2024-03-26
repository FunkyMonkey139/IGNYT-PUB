import React, { useEffect, useState } from 'react';
import './Food.css';
import axios from 'axios'
import cartimg from './media/shopping-cart.png'
function Bbq() {
  const [showBbq, setBbq] = useState([]);

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
    const getBbq = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8008/api/displayDish/showLivebbq"
        );
        setBbq(response.data.livebbqs);
      } catch (error) {
        console.error("Error fetching Bbq details:", error);
      }
    };
    getBbq();
  }, []);

  return (
    <div className="food-container">
      <h1><i>Live BBq</i></h1>
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
          {showBbq.map((service, index) => (
            <tr key={index}>
              <td style={{ textAlign: 'center' }}>

                <img src={service.img} className="boarding-pic" style={{ width: '100px', height: '100px', display: 'block', margin: '0 auto' }} />
              </td>
              <td style={{ fontSize: '1.2em', textAlign: 'center' }}>{service.name}</td>
              <td style={{ fontSize: '1.2em', textAlign: 'center', width: '25%' }}>{service.price} Rs.</td>
              <td style={{ textAlign: 'center' }}>

                <img src={cartimg} className="boarding-pic" style={{ width: '30px', height: '30px', display: 'block', margin: '0 auto' }} onClick={() => { handleCart(service) }} />
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default Bbq;
