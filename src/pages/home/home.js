import React from "react";
import "./home.css";
import aeona from '../../images/AEONA.jpg';
import revelation from '../../images/REVELATION.jpg';
import brokenMachine from '../../images/BROKEN_MACHINE.JPG';
import keepOn from '../../images/KEEP_ON.JPG';
import hero from '../../images/ECHomepage.jpg';
// Need to bring in font awesome to be able to apply icons into button 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faApple, faAmazon, faYoutube } from '@fortawesome/free-brands-svg-icons';

// TODO: need to create a a scrolling carrousel for music section
// TODO: also need to have pictures clickable to take you to music page
// TODO: add links to clickable buttons to visit song release

export default function Home() {
    return (
        <div>
            <h1>Test Test </h1>
            <div className="newRelease">
                <h2 className="newReleaseHeader">"KEEP ON" AVAILABLE NOW</h2>
                <img className="newReleasePic" src={keepOn} alt="song picture" />
                <ul className="newReleaseBtn">
                    <button className="rSpotifyBtn"><FontAwesomeIcon icon={faSpotify} size="2x" />Spotify</button>
                    <button className="rAppleBtn"><FontAwesomeIcon icon={faApple} size="2x" />Music</button>
                    <button className="rAmazonBtn"><FontAwesomeIcon icon={faAmazon} size="2x" />Amazon Music</button>
                    <button className="rYoutubeBtn"><FontAwesomeIcon icon={faYoutube} size="2x" />Youtube</button>
                </ul>
            </div>
            <p> Need to add white space here</p>
                <img className="bandHero" src={hero} alt="band picture" />
            <div id="music">
                <h2> Music </h2>
                <ul>
                    <img className="single-art" src={aeona} alt="Aeona" />
                    <img className="single-art" src={revelation} alt="revelation" />
                    <img className="single-art" src={brokenMachine} alt="brokenMachine" />
                    <img className="single-art" src={keepOn} alt="keepOn" />
                </ul>
            </div>
        </div>
    )
}