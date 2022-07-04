import React, {useState} from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from '@material-ui/icons/Reorder';
import "./Navbar.css"

function Navbar() {
    // NavBr States
    const [ expandNavbar, setExpandNavbar ] = useState(false)
    return (
        // id will change based on state
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => { setExpandNavbar((prev) => !prev) }}>
                    <ReorderIcon></ReorderIcon>
                </button>
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