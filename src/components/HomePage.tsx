import '../stylesheets/style.css';
import React from 'react'
//@ts-ignore
import MyImage from '../images/icons/self-drawing.png';
//@ts-ignore
import ArrowDown from '../images/icons/arrow-down.png';
//@ts-ignore
import PaperFileText from '../images/icons/paper-file-text.svg';

function HomePage() {
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
                <button type="button" id="resume-button" className="tooltip"> <img src={PaperFileText} alt="Resume page vector art button"/>
                    <span className="tooltiptext">Resume</span>
                </button>
            </a>
            <div className="alert">Your message has been sent</div>
            <div id="top-main-container">
                <div id="top-landing-container">
                    <h1>Hi, I'm Jesse :)</h1>
                    <h2>I'm Frontend Engineer from the greater Seattle area. I create stylized sites with with exceptional performance.</h2>
                    <h3>With over 5 years of experience working with industry leading programming tools, I have the expert level knowledge you need for frontend engineering, design, and deployment.</h3>
                    <a href="#form-container"><button id="btn-hire">Let's work together!</button></a>
                </div>
                <div id="top-hover-graphics">
                    <img src={MyImage} alt="Jesse's self portrait vector art"/>
                </div>
                <a href="#main-projects-container" id="bounce-arrow">
                    <img src={ArrowDown} className="down-arrow-graphic" alt="Down arrow vector button"/>
                </a>
            </div>
         </>
     );
}

export default HomePage;