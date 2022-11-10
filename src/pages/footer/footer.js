import React from "react";
import Logo from "../../images/EC-logo.jpg"
import { Link } from "react-router-dom";


import "./footer.css";

// need to bring in  fontawesome from fortawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// This will bring the specific icons I want from fort awesome
import { faInstagram, faTwitter, faFacebook, faYoutube, faApple, faSpotify, faTiktok, faAmazon } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div className="footer-nav">

            <div className="stream-music">
               <h2 className="stream-heading">Stream Now</h2>
               <ul>
                <a className="link-streamStyle" href="https://open.spotify.com/artist/2WSJZ9lECbhhlgEYgbaYur" target="_blank"><FontAwesomeIcon className="stream-links" icon={faSpotify} size="3x"/></a>
                <a className="link-streamStyle" href="https://music.apple.com/us/artist/elysian-cadence/1525863795" target="_blank"><FontAwesomeIcon className="stream-links" icon={faApple} size="3x" /></a>
                <a className="link-streamStyle" href="https://music.amazon.com/artists/B08F2K5CPH/elysian-cadence" target="_blank"><FontAwesomeIcon className="stream-links" icon={faAmazon} size="3x" /></a>
                <a className="link-streamStyle" href="https://www.youtube.com/channel/UCC39Tu9VSEJX4akP2hi-0gQ" target="_blank"><FontAwesomeIcon className="stream-links" icon={faYoutube} size="3x" /></a>
               </ul>
            </div>

            <h4 className="follow-us"> Follow Us </h4>
            <ul className="social-heading">
              <a className="link-socialStyle" href="https://www.instagram.com/elysian_cadence/?hl=en" target="_blank"><FontAwesomeIcon className="social-links" icon={faInstagram} size="2x" /></a>
              <a className="link-socialStyle" href="https://www.tiktok.com/@elysiancadence" target="_blank"><FontAwesomeIcon className="social-links" icon={faTiktok} size="2x" /></a>
              <a className="link-socialStyle" href="https://m.facebook.com/Scribble3AndRumStudios/?ref=nf&__xts__%5B0%5D=68.ARClb3y21pi6idM0ZzeEsmqFJ35qGoT_gYunvEIfm_ThAd6QTWZR2avQI7UmiATSri13Dxtee6fTKYPoXJBzuQTYmabtb_5q1ZVciWv1b-5wGJ1Xf41Duxj3sbEV30C9lw8QJx9hrrvVWdVpPfmi95-YNauJ36AvxM3wRuJWG6aQseObOl3rsZ3IPLp2nPfgEfvQztsEPPa_pgBvymmS7OmgzslNscaZPFnU_LFnMZTUmGa1DSKduSUbtpOzSP1F27aN4PcFa5LSaidItjJFpVb4Kw1csrYAIycUEPFrMEsxL9-d8IiBFYRqHzlF9PRf5PU5Lb0zFuN4pg-n7OwlnMZtz0709Y7z2jXf1oI6HzA_DznzDAkShVYvIg5J8ZvYEFM34LNxqRudnAO1sPKj2fqxZn0ciA0-uihX4X4VNOdUcfsoQWjR&__xts__%5B1%5D=68.ARAUVvXSlF6xAcDJzK3h71aXpJJqTnBCuRg0pkOIVJEhn4J4JXFP8xLrdlwZmh5p9NBlV5oI4L_bfY8PmctRUtpSugplaufwuDyZ02Z4hc5nprexHSYbQ3BTyl7wk1cv5nDZS3f2SOB4FXhnUOLRn5YUzwmpv9cUyvYFQs7kN56NGkW7mdwwKGQNRcGQiGNePkAWZCOXoF2yfnclUQ8Kw26yqiDHQxtsgzLZjVJ0dJupZJGll6QappXBl-ybuWpInAG794uxL0tfVQIT30XRuCLrHASuik9Li6xm23FYcWoJ5Ur1O19439E2uY2k12qtWKceJ9dYIJ4eGzpypOXfximZbuA2byaGF6gLwVWY4Rpl8WpOcgwE-J8b9GUQRIvxTJLMazTA9cCoD3sG-Tqj5ZipRza6H0TBA8WvjKc6Or3YFtoHVx9X&hc_ref=ART-3zrne_-xJcvPFLGZ1hyIjaXSki4t70oE6Dx8UxDO4ir75cW0TzGL_K9hZrHkB8k" target="_blank"><FontAwesomeIcon className="social-links" icon={faFacebook} size="2x" /></a>
              <a><FontAwesomeIcon className="social-links" icon={faTwitter} size="2x" /></a>
            </ul>
            <img className="EC-logo" src={Logo} alt="logo"/>
            <h5 className="copyright">© All Rights Reserved To Elysian Cadence · Created & Designed by RiosTech™ </h5>
        </div>
    )
}