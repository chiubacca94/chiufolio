import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            Navbar here
            <div className="toggleButton">
                <button></button>
            </div>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link> 
                <Link to="/experience"> Experience </Link>
            </div>
        </div>
    )
}

export default Navbar;