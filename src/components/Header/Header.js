import React from 'react';
import './Header.css';
import logo from '../../images/profile.png';

const Header = () => {
    return (
        <div className='header'>
            <h2>Knowledge Project</h2>
            <div className='header_right'>
               <h5>Home</h5>
               <h5>DeshBoard</h5>
               <h5>Login</h5>
               <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;