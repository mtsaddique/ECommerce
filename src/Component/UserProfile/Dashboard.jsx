import React, { useState } from 'react';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('Personal Details');

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
  const renderContent = () => {
    switch (activeSection) {
      case 'Personal Details':
        return (
          <div className="card-dash">
            <h3 className="card-heading-dash">Personal Details</h3>
            <img src="" alt="Profile" className="card-img-dash" />
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Full Name</span>
                <span className="detail-value">{personalDetails.fullName}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email Address</span>
                <span className="detail-value">{personalDetails.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone Number</span>
                <span className="detail-value">{personalDetails.phone}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Address</span>
                <span className="detail-value">{personalDetails.address}</span>
              </div>
            </div>
            <button className="edit-btn">Edit Details</button>
          </div>
        );
      case 'Order History':
        return (
          <div className="card-dash">
            <h3 className="card-heading-dash">Order History</h3>
            {orders.map((order, index) => (
              <p key={index} className="card-text-dash">
                <span className="order-id">{order.id}</span> - {order.status}
              </p>
            ))}
            <button className="view-all-btn">View All Orders</button>
          </div>
        );
      case 'Wishlist':
        return (
          <div className="card-dash">
            <h3 className="card-heading-dash">Wishlist</h3>
            {wishlist.map((item, index) => (
              <p key={index} className="card-text-dash">
                <span className="wishlist-item">{item.name}</span> - {item.price}
              </p>
            ))}
            <button className="view-all-btn">Manage Wishlist</button>
          </div>
        );
      case 'Payment Methods':
        return (
          <div className="card-dash">
            <h3 className="card-heading-dash">Payment Methods</h3>
            <p className="card-text-dash">Add or manage payment methods here.</p>
            <button className="edit-btn">Add Payment Method</button>
          </div>
        );
      case 'Account Settings':
        return (
          <div className="card-dash">
            <h3 className="card-heading-dash">Account Settings</h3>
            <p className="card-text-dash">Update account preferences here.</p>
            <button className="edit-btn">Update Settings</button>
          </div>
        );
      case 'Support':
        return (
          <div className="card-dash">
            <h3 className="card-heading-dash">Support</h3>
            <p className="card-text-dash">Contact us for assistance.</p>
            <button className="edit-btn">Get Help</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Header Navigation */}
      <nav className="header-nav">
        
        <ul className="nav-list">
          <li 
            className={`nav-item ${activeSection === 'Personal Details' ? 'active' : ''}`} 
            onClick={() => setActiveSection('Personal Details')}
          >
            Personal Details
          </li>
          <li 
            className={`nav-item ${activeSection === 'Order History' ? 'active' : ''}`} 
            onClick={() => setActiveSection('Order History')}
          >
            Order History
          </li>
          <li 
            className={`nav-item ${activeSection === 'Wishlist' ? 'active' : ''}`} 
            onClick={() => setActiveSection('Wishlist')}
          >
            Wishlist
          </li>
          <li 
            className={`nav-item ${activeSection === 'Payment Methods' ? 'active' : ''}`} 
            onClick={() => setActiveSection('Payment Methods')}
          >
            Payment Methods
          </li>
          <li 
            className={`nav-item ${activeSection === 'Account Settings' ? 'active' : ''}`} 
            onClick={() => setActiveSection('Account Settings')}
          >
            Account Settings
          </li>
          <li 
            className={`nav-item ${activeSection === 'Support' ? 'active' : ''}`} 
            onClick={() => setActiveSection('Support')}
          >
            Support
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content-dash">
        {renderContent()}
      </div>
    </div>
  );
}

export default Dashboard;