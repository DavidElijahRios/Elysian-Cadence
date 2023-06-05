import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import aeona from '../../images/AEONA.jpg';
import revelation from '../../images/REVELATION.jpg';
import brokenMachine from '../../images/BROKEN_MACHINE.jpg';
import keepOn from '../../images/KEEP_ON.jpg';
import NewHorizon from '../../images/New-horizon.jpg';
import hero from '../../images/ECHomepage.JPG';
// Need to bring in font awesome to be able to apply icons into button 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faApple, faAmazon, faYoutube } from '@fortawesome/free-brands-svg-icons';




export default function Home() {

// !Need to connect button with links Left off here!! 6.3.23

    return (
        <div>
            <img className="bandHero" src={hero} alt="band picture" />
            <div className="newRelease">
                {/* Section below is Hero section for editing */}
                <h2 className="newReleaseHeader">"NEW HORIZON" AVAILABLE NOW</h2>
                <img className="newReleasePic" src={NewHorizon} alt="song picture" />
                <ul className="newReleaseBtn">
                    <a href="https://open.spotify.com/track/4x6dtVEq5MF5FA6n6SUZi9?si=5c3264eb26e34eaa" target="_blank"><button className="rSpotifyBtn"><FontAwesomeIcon icon={faSpotify} size="2x" />Spotify</button></a>
                    <a href="https://music.apple.com/us/album/new-horizon/1660886339?i=1660886340" target="_blank"><button className="rAppleBtn"><FontAwesomeIcon icon={faApple} size="2x" />Music</button></a>
                    <a href="https://music.amazon.com/albums/B0BQQYXQMS?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_XkGT3Mk6UNexRVwW5q8OLlgBe" target="_blank"><button className="rAmazonBtn"><FontAwesomeIcon icon={faAmazon} size="2x" />Amazon Music</button></a>
                    <a href="https://youtu.be/shrLYTfXkpc" target="_blank"><button className="rYoutubeBtn"><FontAwesomeIcon icon={faYoutube} size="2x" />Youtube</button></a>
                </ul>
            </div>
            {/* End of Hero Section */}
            <div id="music-slider">
                <h2 className="music-header"> Music </h2>
                <div className="music-slideTrack">
                    <div>
                        <a href="/music"> <img className="single-art" src={aeona} alt="Aeona" /> </a>
                    </div>
                    <div>
                        <a href="/music"> <img className="single-art" src={brokenMachine} alt="Broken Machine" /> </a>
                    </div>
                    <div>
                        <a href="/music"> <img className="single-art" src={keepOn} alt="Keep On" /> </a>
                    </div>
                    <div>
                        <a href="/music"> <img className="single-art" src={revelation} alt="revelation" /> </a>
                    </div>
                    <div>
                        <a href="/music"> <img className="single-art" src={NewHorizon} alt="NewHorizon" /> </a>
                    </div>
                    <div>
                        <a href="/music"> <img className="single-art" src={aeona} alt="Aeona" /> </a>
                    </div>
                    <div>
                        <a href="/music"> <img className="single-art" src={brokenMachine} alt="Broken Machine" /> </a>
                    </div>
                    <div>
                        <a href="/music"> <img className="single-art" src={keepOn} alt="Keep On" /> </a>
                    </div>
                    <div>
                        <a href="/music"> <img className="single-art" src={revelation} alt="revelation" /> </a>
                    </div>
                    <div>
                        <a href="/music"> <img className="single-art" src={NewHorizon} alt="NewHorizon" /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}