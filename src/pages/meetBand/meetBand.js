import React from "react";
import "./meetBand.css";
import hero from "../../images/ECHomepage.jpg";
import David from "../../images/David.jpeg";
import Sarina from "../../images/Sarina.jpg";
import Erik from "../../images/Erik.jpg";
import Diego from "../../images/Diego.jpeg";

export default function meetBand() {

    return (
        <div>

          <h1 className="header">Biography</h1>

          <p className="bio-description">Setting no limitations on inspirational fuel, San Diego Rock Band Elysian Cadence came into the scene in 2020 with there single release “AEONA”. Bringing to the table their individual musical tastes ranging from Blues, Soul, Reggae, Funk, Punk-Rock, Post-Metalcore to Orchestral music to create the fusion music that trademarks the Elysian Cadence sound. </p>

          <img className="bandBackground" src={hero} alt="band image" />

          <h1 className="members">Members</h1>

          <h3 className="nameR">David Rios</h3>
          <p className="nameR">Bass & Lead Vocals</p>
          <img className="profilepicR" src={David} alt="member pic" />

          <h3 className="nameL">Sarina Rios</h3>
          <p className="nameL">Lead Vocals</p>
          <img className="profilepicL" src={Sarina} alt="member pic" />

          <h3 className="nameR">Erik Garcia</h3>
          <p className="nameR">Lead Guitar & Vocals</p>
          <img className="profilepicR" src={Erik} alt="member pic" />

          <h3 className="nameL">Diego Espinoza</h3>
          <p className="nameL">Rhythm Guitar & Vocals</p>
          <img className="profilepicL" src={Diego} alt="member pic" />


        </div>
    )
};