import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "../../App.css";

const navBar = () => {
    return (
        <div className="navApp">
            <nav className="navbar">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <span id="name" className="navbar-brand mb-0 h1"><Link to="/" style={{ color: '#FFF' }}>Matthew Miller</Link></span>
                </div>
                <div className="col-md-3">

                </div>
                <div className="col-md-1 link">
                <Link to="/About" style={{ color: '#FFF' }}>About Me</Link>
                </div>
                <div className="col-md-1">
                <Link to="/Projects" style={{ color: '#FFF' }}>Projects</Link>
                </div>
                <div className="col-md-1">
                <Link to="/Contact" style={{ color: '#FFF' }}>Contact</Link>
                </div>
                <div className="col-md-1"></div>
            </nav>

        </div>
    )
}
export default navBar