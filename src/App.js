import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Restaurent from './Components/Restaurent';
import Login from "./Components/Login";
import Home from './Pages/Home';
import ManageCanteen from "./Components/managecanteen";
import AdminPage from './Pages/adminpage';
import FoodList from "./Components/FoodList";
import Cart from './Components/Cart'; 
import { CartProvider } from './Components/CartContext'; 

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <CartProvider> 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} /> 
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Navigate to="/home" replace />} /> 
          <Route exact path="/restaurent" element={<Restaurent />} /> 
          <Route exact path="/logout" element={<Navigate to="/" replace />} /> 
          <Route exact path="/manage" element={<ManageCanteen />} />
          <Route exact path="/admin" element={<AdminPage />} />
          <Route exact path="/foodlist" element={<FoodList />} />
          <Route exact path="/cart" element={<Cart />} /> 
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
