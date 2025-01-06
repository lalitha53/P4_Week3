import React from 'react';
import './SubCategories.css';

const SubCategories = () => {
  return (
    <div className="main-content">
      <h2>Sub Categories</h2>
      <div className="search-create">
        <input placeholder="Search" type="text" />
        <button>+ Create</button>
      </div>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Image</th>
            <th>Name</th>
            <th>Parent Category</th>
            <th>Home display</th>
            <th>Published</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Repeat the following <tr> for each subcategory */}
          <tr>
            <td><input type="checkbox" /></td>
            <td><img alt="HeadPhones" height="50" src="https://storage.googleapis.com/a1aa/image/vylZTDOaqWY9EB84mfH5puSfsPdp1lpqsm9PTzSc5fYrJuEoA.jpg" width="50" /></td>
            <td>HeadPhones</td>
            <td>Electronics</td>
            <td><i className="fas fa-check-circle" /></td>
            <td><i className="fas fa-check-circle" /></td>
            <td><i className="fas fa-edit" /></td>
          </tr>
          {/* Add other rows here */}
        </tbody>
      </table>
      <div className="pagination">
        <div>
          <label htmlFor="rows-per-page">Rows per page:</label>
          <select id="rows-per-page">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className="page-info">1-10 of 10</div>
        <div className="page-nav">
          <i className="fas fa-chevron-left" />
          <i className="fas fa-chevron-right" />
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
