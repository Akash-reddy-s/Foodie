import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './FoodList.css';
import BackButton from "./BackButton";

const foodData = {
  "Akash Canteen": [
    { name: "Chicken Biryani", price: 120 },
    { name: "Paneer Butter Masala", price: 90 },
    { name: "Parotta", price: 20 },
  ],
  "Hejex Canteen": [
    { name: "Dosa", price: 30 },
    { name: "Idli", price: 10 },
    { name: "Tea", price: 15 },
  ],
  "Saveetha Canteen": [
    { name: "Sambar Rice", price: 40 },
    { name: "Curd Rice", price: 35 },
    { name: "Chapathi", price: 25 },
  ]
};

const FoodList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = location.state || {};
  const foodItems = foodData[name] || [];
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const goToCart = () => {
    navigate('/cart', { state: { cartItems } });
  };

  return (
    <div className="foodlist-container">
        <BackButton/>
      <h2>{name} - Available Food</h2>
      <ul className="foodlist">
        {foodItems.map((item, index) => (
          <li key={index} className="fooditem">
            <span>{item.name} - ₹{item.price}</span>
            <button className="add-btn" onClick={() => addToCart(item)}>Add</button>
          </li>
        ))}
      </ul>
      {cartItems.length > 0 && (
        <button className="go-to-cart-btn" onClick={goToCart}>Go to Cart ({cartItems.length})</button>
      )}
    </div>
  );
};

export default FoodList;
