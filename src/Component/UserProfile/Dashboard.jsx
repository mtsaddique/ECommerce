import React, { useContext, useState } from 'react';
import { LoginAll } from '../context/LoginContext';

function Dashboard() {
 
  const { LoginCheck, setLoginVisible } = useContext(LoginAll)

  // Dummy data for each section
  const personalDetails = {
    fullName: "Ali Khan",
    email: "ali.khan@example.com",
    phone: "+92 300 1234567",
    address: "123 Main Street, Karachi, Pakistan",
  };

  const orders = [
    { id: "#1234", status: "Delivered on Feb 20, 2025" },
    { id: "#1235", status: "Shipping in progress" },
  ];

  const wishlist = [
    { name: "Product 1", price: "Rs. 1500" },
    { name: "Product 2", price: "Rs. 2500" },
  ];

  // Render content based on active section
  if (!LoginCheck) {
    return (
      <div className="mad_con">
        <div className="login-prompt">
          <h2>Please log in to access your dashboard.</h2>
          <button onClick={() => setLoginVisible(true)} className="login-btn">Log In</button>
        </div>
      </div>
    );
  }
  else {
   
   return(
      <h1>Pakistan DashBoard</h1>
   );
  }



}

export default Dashboard;