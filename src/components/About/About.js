import React from 'react';
import "./about.css"
import headshot from "../../assets/images/headshot.png";

function About() {
    return (
    
            <div className="about" id="about">
                <div className="left">
                    <div>
                        <img className="imgContainer" src={headshot} alt="Amal pic" />
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2>Hi, I'm</h2>
                        <h1>Amal Hirsi</h1>
                        <p> I am a full stack software developer who is passionate about creating easy to use and interactive user interfaces. 
                        </p>
                    </div>
                </div>
            </div>

    );
}
export default About;