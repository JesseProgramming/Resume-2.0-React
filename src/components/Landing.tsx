import React from 'react'
//stylesheets
import './Landing.scss';
//images
import SelfDrawing from '../images/icons/self-drawing.png';
import AnimatedDownArrow from '../images/icons/arrow-down.png';
import ResumeImage from '../images/icons/paper-file-text.svg';

export default function Landing() {
     return(
         <>
             <div id="background-container">
                <div id="background-gradient"></div>
                <div id="background-overlay"></div>
                <div id="planets"></div>
            </div>
            <nav>
                <a href="#background-container">Top</a>
                <a href="#main-projects-container">Projects</a>
                <a href="#skills-and-about">Skills</a>
                <a href="#contact-and-resume">Contact</a>
            </nav>
            <a href={require("../files/resume.pdf").default} download="Jesse James Clem Resume">
                <button type="button" id="resume-button" className="tooltip"> <img src={ResumeImage} alt="Resume page vector art button"/>
                    <span className="tooltiptext">Resume</span>
                </button>
            </a>
            <div className="alert">Your message has been sent</div>
            <div id="top-main-container">
                <div id="top-landing-container">
                    <h1>Hi, I'm Jesse :)</h1>
                    <h2>I'm Frontend Engineer from the greater Seattle area, and I create beautiful, and high performance sites.</h2>
                    <h3>I began my programming journey in my early teens, making games for fun. Over the years, I've specialized in web development and always tried to go beyond meager project requirements in classes to learn new skills. Now, I'm looking for an opportunity to bring my passion and dedication to a professional team.</h3>
                    <a href="#form-container"><button id="btn-hire">Let's work together!</button></a>
                </div>
                <div id="top-hover-graphics">
                    <img src={SelfDrawing} alt="Jesse's self portrait vector art"/>
                </div>
                <a href="#main-projects-container" id="bounce-arrow">
                    <img src={AnimatedDownArrow} className="down-arrow-graphic" alt="Down arrow vector button"/>
                </a>
            </div>
         </>
     );
}