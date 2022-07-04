import React, {useState} from "react";
import { Link } from "react-router-dom";
import ReorderIcon from '@material-ui/icons/Reorder';
import "./Navbar.css"

function Navbar() {
    // NavBr States
    const [ expandNavbar, setExpandNavBar ] = useState(false)
    return (
        <div className="navbar">
            <div className="toggleButton">
                <button>
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