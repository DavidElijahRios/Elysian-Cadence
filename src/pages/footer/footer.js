import React from "react";

import "./footer.css";

// need to bring in  fontawesome from fortawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// This will bring the specific icons I want from fort awesome
import { faInstagram, faTwitter, faFacebook, faYoutube, faApple, faSpotify, faTiktok } from '@fortawesome/free-brands-svg-icons';
// TODO: Need to make another section of the footer for stream now section or make that on home page 
// !Left off here!
export default function Footer() {
    return (
        <div className="footer-nav">
            <h4 className="follow-us"> Follow Us! </h4>
            <ul>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <FontAwesomeIcon icon={faSpotify} size="2x" />
              <FontAwesomeIcon icon={faApple} size="2x" />
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              <FontAwesomeIcon icon={faTiktok} size="2x" />
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </ul>
            <h5 className="copyright">© All Rights Reserved To Elysian Cadence · Created & Designed by RiosTech™ </h5>
        </div>
    )
}