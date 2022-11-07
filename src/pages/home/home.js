import React from "react";
import "./home.css";
import aeona from '../../images/AEONA.jpg';
import revelation from '../../images/REVELATION.jpg';
import brokenMachine from '../../images/BROKEN_MACHINE.JPG';
import keepOn from '../../images/KEEP_ON.JPG';

export default function Home() {
    return (
        <div>
            <h1>Test Test</h1>
            <p> This will be other content and white space</p>
            <div id="music">
              <h2> Music </h2>
              <ul>
              <img className="single-art" src={aeona} alt="Aeona"/>
              <img className="single-art" src={revelation} alt="revelation"/>
              <img className="single-art" src={brokenMachine} alt="brokenMachine"/>
              <img className="single-art" src={keepOn} alt="keepOn"/>
              </ul>
            </div>
        </div>
    )
}