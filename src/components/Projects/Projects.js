import React from 'react';
import "./Projects.css";
import daySchedulerImg from "../../assets/images/daySchedulerImg";
import passwordGeneratorImg from "../../assets/images/passwordGeneratorImg";
import noteTakerImg from "../../assets/images/noteTakerImg";



function Projects() {
    return (

        <div>
<div className="project">
          <div className="project-info">
            <div className="project-img">
              <a href="https://amalhirsi.github.io/5-Work-Day-Scheduler/">
                {" "}
                <img
                  src={flowerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Work Day Scheduler"
                />
              </a>
            </div>
            <div className="project-text">
              <h4>Work Day Scheduler</h4>
              <p>
             This is an application which can be used to make and save notes, making it easier
             for a person to track tasks or thoughts during the day.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <a href="https://https://amalhirsi.github.io/Challenge-3-Password-Generator/">
                {" "}
                <img
                  src={twilightImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Password Generator"
                />
              </a>
            </div>
            <div className="project-text">
              <h4>Password Generator</h4>
              <p>
                This is an application which can be used to generate unique and safe 
                passwords, which meet the criteria needed.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-info">
            <div className="project-img">
              <a href="https://amalhirsi.github.io/11-Note-Taker/">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="project-text">
              <h4>Note Taker</h4>
              <p>
                This application cane be used to write
                notes, save and to delete notes.{" "}
              </p>
            </div>
          </div>
        </div>
    </div>

);
}


export default Projects;