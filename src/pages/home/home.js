import React from "react";
import "./home.css";
import aeona from '../../images/AEONA.jpg';
import revelation from '../../images/REVELATION.jpg';
import brokenMachine from '../../images/BROKEN_MACHINE.JPG';
import keepOn from '../../images/KEEP_ON.JPG';
import hero from '../../images/ECHomepage.jpg';

// TODO: need to create a a scrolling carrousel for music section
// TODO: also need to have pictures clickable to take you to music page
// TODO: add links to clickable buttons to visit song release
// TODO: add icons to to buttons with text

export default function Home() {
    return (
        <div>
            <h1>Test Test </h1>
            <div className="newRelease">
            <h2>"KEEP ON" AVAILABLE NOW</h2>
            <img className="newReleasePic" src={keepOn} alt="song picture"/>
            <ul>
                <button>SPOTIFY</button>
                <button>APPLE MUSIC</button>
                <button>AMAZON MUSIC</button>
                <button>PANDORA</button>
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