import React from "react";
import './Navbar.scss'
import logo from '../../access/logo.png'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo tours"/>
            <ul className="links">
                <li>
                    <NavLink to="/home" className="link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="link">About</NavLink>
                </li>
                <li>
                    <NavLink to ="/tours" className="link">Tours</NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar