import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Restaurent.css';
import BackButton from "./BackButton";

const Restaurent = () => {
  const navigate = useNavigate();

  const handleOrderClick = (restaurantName) => {
    navigate("/foodlist", {
      state: { name: restaurantName }
    });
  };

  const restaurants = [
    "Akash Canteen",
    "Hejex Canteen",
    "Saveetha Canteen"
  ];

  return (
    <Container fluid>
        <div><BackButton/></div>
      <h1>List of Restaurants</h1>
      {restaurants.map((name) => (
        <Row key={name}>
          <Col lg={{ span: 8, offset: 2 }} md={10} sm={12}>
            <div className="canteen">
              <h2 className="canteenname">{name}</h2>
              <h5>Contact no. +91 123456789</h5>
              <h6>Food Type: Veg & Non-veg</h6>
              <button className="orderbtn" onClick={() => handleOrderClick(name)}>
                Order
              </button>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Restaurent;
