import React from "react";
import { useEffect, useState } from "react";
import "./home.css";
import aeona from '../../images/AEONA.jpg';
import revelation from '../../images/REVELATION.jpg';
import brokenMachine from '../../images/BROKEN_MACHINE.jpg';
import keepOn from '../../images/KEEP_ON.jpg';
import hero from '../../images/ECHomepage.jpg';
// Need to bring in font awesome to be able to apply icons into button 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faApple, faAmazon, faYoutube } from '@fortawesome/free-brands-svg-icons';

// TODO: need to create a a scrolling carrousel for music section
// TODO: also need to have pictures clickable to take you to music page
// TODO: add links to clickable buttons to visit song release
// !Fix transitions of pictures!
// ?PLAN: I may switch auto carousel idea to scrollable slide show with animation to opaque album art section with a button to switch to music page and create a full out music page


// const data = [ aeona, revelation, brokenMachine, keepOn ]
// const Carousel = () => {
//     const [ currentIndex, setCurrentIndex ] = useState(0)
//        const scroll = () => {
//             if(currentIndex === data.length-1) {
//                 return setCurrentIndex(0)
//             } else {
//                 return setCurrentIndex(currentIndex+1)
//             }
//        }
//        useEffect(() => {
//         const interval = setInterval(() => {scroll()}, 3000)

//         return () => clearInterval(interval)})

// }




export default function Home() {

    const data = [ aeona, revelation, brokenMachine, keepOn]
        const [ currentIndex, setCurrentIndex ] = useState(0)
           const scroll = () => {
                if(currentIndex === data.length-1) {
                    return setCurrentIndex(0)
                } else {
                    return setCurrentIndex(currentIndex+1)
                }
           }
           useEffect(() => {
            const interval = setTimeout(() => {scroll()}, 1000)
    
            return () => clearTimeout(interval)})
    



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
                {/* Music Carousel will go here */}
            <div id="music">
                <h2> Music </h2>
                <div className="inner-music">
                    <ul className="music-container">
                        {/* mapping through Data so that i can display all available album releases in data Array */}
                        { data.map((item, index) => {
                            return (
                                <img className="single-art" style={{transform: `translate(-${currentIndex}%)`}} src={item} alt="photo" />
                            ) 
                        })}
                        {/* <div className="music-item">
                            <img className="single-art" src={revelation} alt="revelation" />
                        </div>
                        <div className="music-item">
                            <img className="single-art" src={brokenMachine} alt="brokenMachine" />
                        </div>
                        <div className="music-item">
                            <img className="single-art" src={keepOn} alt="keepOn" />
                        </div> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}