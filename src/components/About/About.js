import React from 'react';
import "./about.css"

function About() {
    return (
    
            <div className="about" id="about">
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/headshot.jpg" alt="Amal pic" />
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