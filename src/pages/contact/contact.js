import React from "react";
import "./contact.css";
import hero from "../../images/ECHomepage.jpg";
import David from "../../images/David.jpeg";
import Sarina from "../../images/Sarina.jpg";
import Erik from "../../images/Erik.jpg";
import Diego from "../../images/Diego.jpeg";

export default function Contact() {
// !Need to style page and move all code over to meet band js this is in wrong folder!!!!

    return (
        <div>

          <h1 className="header">Biography</h1>

          <p className="bio-description">Setting no limitations on inspirational fuel, San Diego Rock Band Elysian Cadence came into the scene in 2020 with there single release “AEONA”. Bringing to the table their individual musical tastes ranging from Blues, Soul, Reggae, Funk, Punk-Rock, Post-Metalcore to Orchestral music to create the fusion music that trademarks the Elysian Cadence sound. </p>

          <img className="bandBackground" src={hero} alt="band image" />

          <h1>Members</h1>

          <img className="profilepic" src={David} alt="member pic" />
          <h3>David Rios</h3>
          <p>Bass & Lead Vocals</p>

          <img className="profilepic" src={Sarina} alt="member pic" />
          <h3>Sarina Rios</h3>
          <p>Lead Vocals</p>

          <img className="profilepic" src={Erik} alt="member pic" />
          <h3>Erik Garcia</h3>
          <p>Lead Guitar & Vocals</p>

          <img className="profilepic" src={Diego} alt="member pic" />
          <h3>Diego Espinoza</h3>
          <p>Rhythm Guitar & Vocals</p>


        </div>
    )
};