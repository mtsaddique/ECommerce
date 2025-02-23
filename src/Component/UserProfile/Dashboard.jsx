import React from 'react'

function Dashboard() {
  const userName = "Ali";
  const orders = [
    { id: "#1234", status: "Delivered on Feb 20, 2025" },
    { id: "#1235", status: "Shipping in progress" },
  ];
  const wishlist = [
    { name: "Product 1", price: "Rs. 1500" },
    { name: "Product 2", price: "Rs. 2500" },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-heading">User Dashboard</h2>
        <ul className="sidebar-list">
          <li className="sidebar-item">Profile</li>
          <li className="sidebar-item">Order History</li>
          <li className="sidebar-item">Wishlist</li>
          <li className="sidebar-item">Payment Methods</li>
          <li className="sidebar-item">Account Settings</li>
          <li className="sidebar-item">Support</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content-dash">
        <div className="card-dash">
          <h3 className="card-heading-dash">Welcome, {userName}!</h3>
          <p className="card-text-dash">Here's a quick overview of your account.</p>
        </div>
        <div className="card-dash">
          <h3 className="card-heading-dash">Recent Orders</h3>
          {orders.map((order, index) => (
            <p key={index} className="card-text-dash">
              Order {order.id} - {order.status}
            </p>
          ))}
        </div>
        <div className="card-dash">
          <h3 className="card-heading-dash">Wishlist</h3>
          {wishlist.map((item, index) => (
            <p key={index} className="card-text-dash">
              {item.name} - {item.price}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard