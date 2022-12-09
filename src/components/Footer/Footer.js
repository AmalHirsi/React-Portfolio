import React from 'react';
import "./Footer.css";
import { GrTwitter} from 'react-icons/Gr';
import { FaGithub } from 'react-icons/Fa';
import { FaLinkedinIn } from 'react-icons/Fa';


function Footer() {

    return (
        <div className="footer" id="footer">
        <ul>
            <li><a href="https://github.com" target="_blank" rel="noreferrer"><GitHubIcon className="icon"></GitHubIcon></a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><LinkedInIcon className="icon"></LinkedInIcon></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><TwitterIcon className="icon"></TwitterIcon></a></li>
        </ul>
    </div>
        );
}

export default Footer;