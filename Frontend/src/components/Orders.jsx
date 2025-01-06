import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Orders.css';

const Orders = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State to toggle categories
  
  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>
          <img src="/only_only_logo-png.png" alt="StyleU Logo" />
          StyleU
        </h2>
        <ul>
          <li><Link to="/admin/dashboard"><i className="fas fa-tachometer-alt"></i>Dashboard</Link></li>
          <li><Link to="/user-manage"><i className="fas fa-users"></i>User Manage</Link></li>
          <li className="dropdown">
            <button className="dropdown-btn" onClick={toggleCategory}>
              <i className="fas fa-list"></i> Category Manage
            </button>
            {isCategoryOpen && (
              <ul className="dropdown-content">
                <li><Link to="/category-manage">Manage Categories</Link></li>
                <li><Link to="/sub-categories">Sub Categories</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/brand-manage"><i className="fas fa-tags"></i>Brand Manage</Link></li>
          <li><Link to="/tag-manage"><i className="fas fa-tag"></i>Tag Manage</Link></li>
          <li><Link to="/product-manage"><i className="fas fa-box"></i>Product Manage</Link></li>
          <li><Link to="/order-manage"><i className="fas fa-shopping-cart"></i>Order Manage</Link></li>
          <li><Link to="/banner-manage"><i className="fas fa-image"></i>Banner Manage</Link></li>
          <li><Link to="/dashboard-users"><i className="fas fa-user"></i>Dashboard Users</Link></li>
          <li><Link to="/offer-manage"><i className="fas fa-gift"></i>Offer Manage</Link></li>
          <li><Link to="/others-manage"><i className="fas fa-cogs"></i>Others Manage</Link></li>
          <li><Link to="/settings"><i className="fas fa-cog"></i>Settings</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content">
          <div className="content-header">
            <h2>Orders</h2>
            <div className="filters">
              <input type="date" value="2024-01-01" />
              <span>To</span>
              <input type="date" value="2024-12-31" />
              <input type="search" placeholder="Search" />
              <button className="excel">
                <i className="fas fa-file-excel"></i> Excel
              </button>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>Order Id</th>
                  <th>User</th>
                  <th>Mobile No</th>
                  <th>Delivery Mode</th>
                  <th>Payable Amount</th>
                  <th>Payable Mode</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" /></td>
                  <td>#ORD502208152</td>
                  <td>demo</td>
                  <td>1234123456</td>
                  <td>Company delivery</td>
                  <td className="payable-amount">1270.00</td>
                  <td><span className="payable-mode cash">Cash</span></td>
                  <td>15 Nov, 2024 15:19</td>
                  <td><span className="status received">Received</span></td>
                  <td className="action"><button>View</button></td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
            <div className="pagination">
              <div>
                Rows per page:
                <select>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
              </div>
              <div>
                1-10 of 230
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
