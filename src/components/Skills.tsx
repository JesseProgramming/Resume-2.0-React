import React from 'react'

import './Skills.scss';

import IMG_Javascript from '../images/skills-icons/javascript.png';
import IMG_TypeScript from '../images/skills-icons/typescript.png';
import IMG_React from '../images/skills-icons/react.png';
import IMG_HTML5 from '../images/skills-icons/html5.png';
import IMG_CSS3 from '../images/skills-icons/css3.png';
import IMG_SASS from '../images/skills-icons/sass.png';
import IMG_Bootstrap from '../images/skills-icons/bootstrap.png';
import IMG_jQuery from '../images/skills-icons/jquery.png';
import IMG_PHP from '../images/skills-icons/php.png';
import IMG_Wordpress from '../images/skills-icons/wordpress.png';
import IMG_Git from '../images/skills-icons/git.png';
import IMG_Github from '../images/skills-icons/github.png';
import IMG_Webpack from '../images/skills-icons/webpack.png';
import IMG_Babel from '../images/skills-icons/babel.png';
import IMG_Node from '../images/skills-icons/node-js.png';
import IMG_ChromeDevtools from '../images/skills-icons/chrome-devtools.png';
import IMG_GoogleAnalytics from '../images/skills-icons/google-analytics.png';
import IMG_Firebase from '../images/skills-icons/firebase.png';
import IMG_Photoshop from '../images/skills-icons/photoshop.png';
import IMG_Illustrator from '../images/skills-icons/illustrator.png';

export default function Skills() {
     return(
         <>
            <div id="skills-and-about">
            <h4 className="section-header">Top Technical Skills</h4>
            <div className="skill-card-container">
                <div className="skill-cards">
                    <img src={IMG_Javascript} className="skill-icons" alt="Javascript graphic"/>
                    <p>JavaScript</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_TypeScript} className="skill-icons" alt="TypeScript graphic"/>
                    <p>TypeScript</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_React} className="skill-icons" alt="React graphic"/>
                    <p>React</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_HTML5} className="skill-icons" alt="HTML5 graphic"/>
                    <p>HTML5</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_CSS3} className="skill-icons" alt="CSS3 graphic"/>
                    <p>CSS3</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_SASS} className="skill-icons" alt="SASS graphic"/>
                    <p>SASS</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_CSS3} className="skill-icons" alt="Bootstrap graphic"/>
                    <p>Bootstrap</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_jQuery} className="skill-icons" alt="jQuery graphic"/>
                    <p>jQuery</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_PHP} className="skill-icons" alt="PHP graphic"/>
                    <p>PHP</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Wordpress} className="skill-icons" alt="Wordpress graphic"/>
                    <p>Wordpress</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Git} className="skill-icons" alt="Git graphic"/>
                    <p>Git</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Github} className="skill-icons" alt="GitHub graphic"/>
                    <p>GitHub</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Webpack} className="skill-icons" alt="WebPack graphic"/>
                    <p>WebPack</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Babel} className="skill-icons" alt="Babel graphic"/>
                    <p>Babel</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Node} className="skill-icons" alt="Python graphic"/>
                    <p>Node.js</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_ChromeDevtools} className="skill-icons" alt="Chrome DevTools graphic"/>
                    <p>Chrome DevTools</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_GoogleAnalytics} className="skill-icons" alt="Google Analytics graphic"/>
                    <p>Google Analytics</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Firebase} className="skill-icons" alt="FireBase graphic"/>
                    <p>FireBase</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Photoshop} className="skill-icons" alt="Photoshop graphic"/>
                    <p>Photoshop</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Illustrator} className="skill-icons" alt="Illustrator graphic"/>
                    <p>Illustrator</p>
                </div>
            </div>
            <div id="random-facts">
                <h4 className="section-header">3 random facts about me</h4>
                <ol>
                    <li>I'm part 107 certified by the FAA to fly drones commercially.</li>
                    <li>I was nationally recognized by Red Robin as their biggest fan when I was a kid.</li>
                    <li>For hobbies, I'm really into in game design, robotics, animation, and voice acting.</li>
                </ol>
            </div>
        </div>
         </>
     );
}