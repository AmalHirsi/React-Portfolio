import React from 'react';
import "./Footer.css";
import {FaGithub} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
// import { GrTwitter} from 'react-icons/Gr';
// import { FaGithub } from 'react-icons/Fa';
// import { FaLinkedinIn } from 'react-icons/Fa';


function Footer() {

    return (
        <div className="footer" id="footer">
        <ul>
            <li><a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub className="icon"></FaGithub></a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin className="icon"></FaLinkedin></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter className="icon"></FaTwitter></a></li>
        </ul>
    </div>
        );
}

export default Footer;