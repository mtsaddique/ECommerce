import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleMobileMenu }) => {
    return (
        <header className="main-header">
            <h2>Dashboard</h2>
            <div className="header-actions">
                <input type="text" placeholder="Search..." />
                <button className="notification-btn">
                    <FontAwesomeIcon icon={faBell} />
                    <span className="badge">3</span>
                </button>
            </div>
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    );
};

export default Header;