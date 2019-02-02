import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const Header = () => (
    <div className="header">
        <Link to="/"><img alt="Logo" src={logo} /></Link>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </div>
);

export default Header;
