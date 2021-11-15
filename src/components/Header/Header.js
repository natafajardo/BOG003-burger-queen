import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logout">
                <span>CERRAR</span>
            </div>
            <div className="brand">
                <img src="./images/logo.png" alt="logo" />
            </div>
            <div className="user">
                <span>Natalia Fajardo</span>
            </div>
        </header>
    )
}

export default Header;
