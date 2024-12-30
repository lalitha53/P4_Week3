import React from 'react';
import './Admindashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>
          <img src="/only_only_logo-png.png" alt="StyleU Logo" />
          StyleU
        </h2>
        <ul>
          <li><i className="fas fa-tachometer-alt"></i>Dashboard</li>
          <li><i className="fas fa-users"></i>User Manage</li>
          <li><i className="fas fa-list"></i>Category Manage</li>
          <li><i className="fas fa-tags"></i>Brand Manage</li>
          <li><i className="fas fa-tag"></i>Tag Manage</li>
          <li><i className="fas fa-box"></i>Product Manage</li>
          <li><i className="fas fa-shopping-cart"></i>Order Manage</li>
          <li><i className="fas fa-image"></i>Banner Manage</li>
          <li><i className="fas fa-user"></i>Dashboard Users</li>
          <li><i className="fas fa-gift"></i>Offer Manage</li>
          <li><i className="fas fa-cogs"></i>Others Manage</li>
          <li><i className="fas fa-cog"></i>Settings</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <div className="user-info">
            <img src="/user_logo.png" alt="User Avatar" />
            <span>Admin</span>
          </div>
          <div className="earnings">
            <div>
              <span>Last Month</span>
              <span>₹ 0</span>
            </div>
            <div>
              <span>Total Earnings</span>
              <span>₹ 2503724.25</span>
            </div>
          </div>
        </div>

        <div className="dashboard">
          <h1>Dashboard</h1>
          <div className="stats">
            <div className="stat" style={{ backgroundColor: '#ff6b6b' }}>
              <div className="info">
                <h3>Total Users</h3>
                <p>117</p>
              </div>
              <i className="fas fa-users"></i>
            </div>
            <div className="stat" style={{ backgroundColor: '#4ecdc4' }}>
              <div className="info">
                <h3>Total Products</h3>
                <p>20</p>
              </div>
              <i className="fas fa-cube"></i>
            </div>
            <div className="stat" style={{ backgroundColor: '#5f27cd' }}>
              <div className="info">
                <h3>Total Orders</h3>
                <p>230</p>
              </div>
              <i className="fas fa-clipboard-list"></i>
            </div>
          </div>

          <div className="sales-summary">
            <h2>Sales Summary</h2>
            <div className="summary">
              <div className="info">
                <h3>₹ 2503713</h3>
                <p>Current Month Earnings</p>
                <h3>402</h3>
                <p>Current Month Sales</p>
                <button>View all orders</button>
              </div>
              <div className="chart">
                <img src="/Statistics.png" alt="Sales Chart" />
              </div>
            </div>
          </div>

          <div className="orders">
            <div className="top-orders">
              <h2>Todays Top Orders</h2>
              <table>
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>User</th>
                    <th>Status</th>
                    <th>Payments</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add rows dynamically */}
                </tbody>
              </table>
            </div>
            <div className="order-stats">
              <h2>Order Stats</h2>
              <div className="chart">
                <img src="/Pie_chart.png" alt="Order Stats Pie Chart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
