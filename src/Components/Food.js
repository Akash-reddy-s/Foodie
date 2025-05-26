import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Food.css';
import { Link } from "react-router-dom";
import BackButton from "./BackButton";

const Food = () => {
    return (
        <div>
            <BackButton/>
            <h1>Welcome</h1>
            <h2 className="amount">Available Amount: ₹0</h2>

            <div className="Mainpage">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} lg={5} className="food-box">
                            <div className="food-item">
                                <h3>Restaurants</h3>
                                <p>View and order from available canteens</p>
                                <Link to='/restaurent'>
                                    <button className="food-btn">Go</button>
                                </Link>
                            </div>
                        </Col>

                        <Col md={6} lg={5} className="food-box">
                            <div className="food-item">
                                <h3>Order ID</h3>
                                <p>Track your past and current orders</p>
                                <button className="food-btn">Check</button>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center align-items-center">
                        <Col md={6} lg={5} className="food-box">
                            <div className="food-item">
                                <h3>Add Cash</h3>
                                <p>Recharge your wallet for food orders</p>
                                <button className="food-btn">Add</button>
                            </div>
                        </Col>

                        <Col md={6} lg={5} className="food-box">
                            <div className="food-item">
                                <h3>Cart</h3>
                                <p>View selected items before payment</p>
                                <Link to="/cart">
                                     <button className="food-btn">Open</button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Food;
