import React from 'react';
import './CategoryManage.css';

const CategoryManage = () => {
  return (
    <div className="container">
      <div className="sidebar">
      <h2>
          <img src="/only_only_logo-png.png" alt="StyleU Logo" />
          StyleU
        </h2>
        <ul>
          <li><a href="#"><i className="fas fa-home"></i> Dashboard</a></li>
          <li><a href="#"><i className="fas fa-user"></i> User Manage</a></li>
          <li>
            <a href="#"><i className="fas fa-th-large"></i> Category Manage</a>
            <ul>
              <li><a href="#"><i className="fas fa-list"></i> Categories</a></li>
              <li><a href="#"><i className="fas fa-list-alt"></i> Sub Categories</a></li>
            </ul>
          </li>
          <li><a href="#"><i className="fas fa-tags"></i> Brand Manage</a></li>
          <li><a href="#"><i className="fas fa-tag"></i> Tag Manage</a></li>
          <li><a href="#"><i className="fas fa-box"></i> Product Manage</a></li>
          <li><a href="#"><i className="fas fa-shopping-cart"></i> Order Manage</a></li>
          <li><a href="#"><i className="fas fa-image"></i> Banner Manage</a></li>
          <li><a href="#"><i className="fas fa-users"></i> Dashboard Users</a></li>
          <li><a href="#"><i className="fas fa-gift"></i> Offer Manage</a></li>
          <li><a href="#"><i className="fas fa-ellipsis-h"></i> Others Manage</a></li>
          <li><a href="#"><i className="fas fa-cog"></i> Settings</a></li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input placeholder="Search" type="text" />
          </div>
          <button className="create-button">+ Create</button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Image</th>
                <th>Name</th>
                <th>Home display</th>
                <th>Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Category 1 */}
              <tr>
                <td><input type="checkbox" /></td>
                <td><img alt="Kurta" height="50" src="https://storage.googleapis.com/a1aa/image/fq2WUSjdDG1f60FWuo7QSSGpN1B68bWcWgvjeuMKdJelTcJQB.jpg" width="50" /></td>
                <td>Kurta</td>
                <td><i className="fas fa-eye-slash" style={{color: 'red'}}></i></td>
                <td><i className="fas fa-check-circle" style={{color: 'orange'}}></i></td>
                <td><i className="fas fa-edit" style={{color: 'orange'}}></i></td>
              </tr>
              {/* Category 2 */}
              <tr>
                <td><input type="checkbox" /></td>
                <td><img alt="Girls" height="50" src="https://storage.googleapis.com/a1aa/image/RrevkDO7PSyDPqvhtCIDTFLY7A4tT5x701z8Ufo0CjouEXCUA.jpg" width="50" /></td>
                <td>Girls</td>
                <td><i className="fas fa-eye-slash" style={{color: 'red'}}></i></td>
                <td><i className="fas fa-check-circle" style={{color: 'orange'}}></i></td>
                <td><i className="fas fa-edit" style={{color: 'orange'}}></i></td>
              </tr>
              {/* Category 3 */}
              <tr>
                <td><input type="checkbox" /></td>
                <td><img alt="Grocery" height="50" src="https://storage.googleapis.com/a1aa/image/oMThnD7fYjSsci0CtHJxb9Yv0usPKMFh1lYYshMyUcXViLBKA.jpg" width="50" /></td>
                <td>Grocery</td>
                <td><i className="fas fa-eye-slash" style={{color: 'red'}}></i></td>
                <td><i className="fas fa-check-circle" style={{color: 'orange'}}></i></td>
                <td><i className="fas fa-edit" style={{color: 'orange'}}></i></td>
              </tr>
              {/* Category 4 */}
              <tr>
                <td><input type="checkbox" /></td>
                <td><img alt="Electronics" height="50" src="https://storage.googleapis.com/a1aa/image/wMihyPbC4mIkMVjsCIodPZfWtlY5s0vDAauJq8xjU88YiLBKA.jpg" width="50" /></td>
                <td>Electronics</td>
                <td><i className="fas fa-eye-slash" style={{color: 'red'}}></i></td>
                <td><i className="fas fa-check-circle" style={{color: 'orange'}}></i></td>
                <td><i className="fas fa-edit" style={{color: 'orange'}}></i></td>
              </tr>
              {/* Additional Categories... */}
              <tr>
                <td><input type="checkbox" /></td>
                <td><img alt="Furniture" height="50" src="https://storage.googleapis.com/a1aa/image/tPioNvQcBD7IARcUthYpiawpqf0zcAG99OUzhOkjNEf6EXCUA.jpg" width="50" /></td>
                <td>Furniture</td>
                <td><i className="fas fa-eye-slash" style={{color: 'red'}}></i></td>
                <td><i className="fas fa-check-circle" style={{color: 'orange'}}></i></td>
                <td><i className="fas fa-edit" style={{color: 'orange'}}></i></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <div>
            <span>Rows per page:</span>
            <select>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
          <div>
            <span>1-10 of 22</span>
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryManage;
