import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/Forgotpassword';
import UserDashboard from './components/Userdashboard';
import AdminDashboard from './components/Admindashboard';
import UserManage from './components/UserManage';
import CategoryManage from './components/categoryManage';
import SubCategories from './components/SubCategories';
import Orders from './components/Orders';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/user-manage" element={<UserManage />} />
                <Route path="/category-manage" element={<CategoryManage />} />
                <Route path="/sub-categories" component={<SubCategories />} />
                <Route path="/order-manage" element={<Orders />} />
            </Routes>
        </Router>
    );
};

export default App;