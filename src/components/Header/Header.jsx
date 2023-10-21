import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header">
            <img src="/src/images/Logo.svg" alt="" />
            <div className="nav-menu">
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/management">Management Inventory</Link>
                <Link to="/login">Login</Link>
            </div>

        </nav>
    );
};

export default Header;