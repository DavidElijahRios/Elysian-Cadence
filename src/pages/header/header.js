// need to import react
import React from "react";
// need to bring in styles sheet
import "./header.css";
// TODO: May need to import link from react-router-dom for it to be a clickable link
import { Link } from "react-router-dom";
// Brining in material Ui components for design



// Need to create header function to be called in app.js
// also need to add export default for it to be read in app.js

export default function Header() {

    return (
        <div>
            <nav className="nav-bar">
                <a className="bandName" href="/"> Elysian Cadence </a>
                <ul>
                    <Link className="nav-links" to="/">Home</Link>
                    {/* TODO: Need to figure out how to scroll to section of page */}
                    <Link className="nav-links" to="#music">Music</Link>
                    <Link className="nav-links" to="/shop">Shop</Link>
                    <Link className="nav-links" to="/meetBand">Meet The Band</Link>
                    <Link className="nav-links" to="/contact">Contact</Link>
                </ul>
                
            </nav>

        </div>
    )
}