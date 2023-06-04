import React from "react";
import "./meetBand.css";
import hero from "../../images/meetBand.JPG";
import David from "../../images/david.JPG";
import Sarina from "../../images/sarina.JPG";
import Erik from "../../images/erik.JPG";
import Diego from "../../images/diego.JPEG";
import Victor from "../../images/victor.JPEG";

export default function meetBand() {

    return (
        <div>
          <img className="bandBackground" src={hero} alt="band image" />

          <h1 className="header">Biography</h1>

          <p className="bio-description">Setting no limitations on inspirational fuel, San Diego Rock Band Elysian Cadence came into the scene in 2020 with there single release “AEONA”. Bringing to the table their individual musical tastes ranging from Blues, Soul, Reggae, Funk, Punk-Rock, Post-Metalcore to Orchestral music to create the fusion music that trademarks the Elysian Cadence sound. </p>


          <h1 className="members">Band Members</h1>

          <h3 className="nameR">David Rios</h3>
          <p className="titleR">Bass & Lead Vocals</p>
          <img className="profilepicR" src={David} alt="member pic" />

          <h3 className="nameLS">Sarina Rios</h3>
          <p className="titleLS">Lead Vocals</p>
          <img className="profilepicL" src={Sarina} alt="member pic" />

          <h3 className="nameRE">Erik Garcia</h3>
          <p className="titleRE">Lead Guitar & Vocals</p>
          <img className="profilepicR" src={Erik} alt="member pic" />

          <h3 className="nameL">Diego Espinoza</h3>
          <p className="titleL">Rhythm Guitar & Vocals</p>
          <img className="profilepicL" src={Diego} alt="member pic" />

          <h3 className="nameRV">Victor Palavicini</h3>
          <p className="titleRV">Drums</p>
          <img className="profilepicR" src={Victor} alt="member pic" />



        </div>
    )
};