import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";

function Navigation() {
    const [isActive, setisActive] = useState(false);
    const handleHamburger = () => {
        setisActive(!isActive);
    }

    return (
        <>
            <nav className="navbar is-black" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28" />
                    </Link>
                    <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false" onClick={handleHamburger}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navMenu" className={`navbar-menu${isActive ? " is-active" : ""}`}>
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item">Home</Link>
                        <Link to="/about" className="navbar-item">About</Link>
                        <Link to="/users" className="navbar-item">Users</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation