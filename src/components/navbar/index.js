import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../../App.css";

const navBar = () => {
    return (
        <div className="navApp">
            <nav className="navbar">
                <span id="name" className="navbar-brand mb-0 h1">
                    <Link to="/" className="navbar-link">Matthew Miller</Link>
                </span>
                <Link to="/About" className="navbar-link">About Me</Link>
                <Link to="/Projects" className="navbar-link">Projects</Link>
                <Link to="/Contact" className="navbar-link">Contact</Link>
            </nav>
        </div>
    )
}
export default navBar