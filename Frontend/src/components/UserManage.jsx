import React from "react";
import { NavLink } from "react-router-dom";
import "./UserManage.css";

const UserManage = () => {
  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>
          <img src="/only_only_logo-png.png" alt="StyleU Logo" />
          StyleU
        </h2>
        <ul>
            <li>
                <NavLink to="/admin/dashboard" activeClassName="active">
                <i className="fas fa-tachometer-alt"></i>Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink to="/user-manage" activeClassName="active">
                <i className="fas fa-users"></i>User Manage
                </NavLink>
            </li>
            <li>
                <NavLink to="/category-manage" activeClassName="active">
                <i className="fas fa-list"></i>Category Manage
                </NavLink>
            </li>
            <li>
                <NavLink to="/brand-manage" activeClassName="active">
                <i className="fas fa-tags"></i>Brand Manage
                </NavLink>
            </li>
            <li>
                <NavLink to="/tag-manage" activeClassName="active">
                <i className="fas fa-tag"></i>Tag Manage
                </NavLink>
            </li>
            <li>
                <NavLink to="/product-manage" activeClassName="active">
                <i className="fas fa-box"></i>Product Manage
                </NavLink>
            </li>
            <li>
                <NavLink to="/order-manage" activeClassName="active">
                <i className="fas fa-shopping-cart"></i>Order Manage
                </NavLink>
            </li>
            <li>
                <NavLink to="/banner-manage" activeClassName="active">
                <i className="fas fa-image"></i>Banner Manage
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard-users" activeClassName="active">
                <i className="fas fa-user"></i>Dashboard Users
                </NavLink>
            </li>
            <li>
                <NavLink to="/offer-manage" activeClassName="active">
                <i className="fas fa-gift"></i>Offer Manage
                </NavLink>
            </li>
            <li>
                <NavLink to="/others-manage" activeClassName="active">
                <i className="fas fa-cogs"></i>Others Manage
                </NavLink>
            </li>
            <li>
                <NavLink to="/settings" activeClassName="active">
                <i className="fas fa-cog"></i>Settings
                </NavLink>
            </li>
        </ul>

      </div>

      <div className="main-content">
        {/* Header */}
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

        {/* Search Bar and Actions */}
        <div className="header">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div className="actions">
            <button className="create">+ Create</button>
            <button className="excel">Excel</button>
          </div>
        </div>

        {/* User Table */}
        <table className="user-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Created Date</th>
              <th>Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace this placeholder with dynamic data */}
            <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>Lucas Anderson</td>
                <td>lucas.anderson@example.com</td>
                <td>+91 9678901234</td>
                <td>2025-01-07</td>
                <td>Yes</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
                </tr>
                <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>Ava Wilson</td>
                <td>ava.wilson@example.com</td>
                <td>+91 9789012345</td>
                <td>2025-01-08</td>
                <td>No</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
                </tr>
                <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>Ethan Moore</td>
                <td>ethan.moore@example.com</td>
                <td>+91 9890123456</td>
                <td>2025-01-09</td>
                <td>Yes</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
                </tr>
                <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>Chloe Taylor</td>
                <td>chloe.taylor@example.com</td>
                <td>+91 9901234567</td>
                <td>2025-01-10</td>
                <td>No</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
                </tr>
                <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>James Harris</td>
                <td>james.harris@example.com</td>
                <td>+91 9012345678</td>
                <td>2025-01-11</td>
                <td>Yes</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
                </tr>
                <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>Sophia Clark</td>
                <td>sophia.clark@example.com</td>
                <td>+91 9123456789</td>
                <td>2025-01-12</td>
                <td>No</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
                </tr>
                <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>Jackson Lewis</td>
                <td>jackson.lewis@example.com</td>
                <td>+91 9234567890</td>
                <td>2025-01-13</td>
                <td>Yes</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>

          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <div>
            Rows per page:
            <select>
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
          </div>
          <div>
            1-10 of 117
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManage;
