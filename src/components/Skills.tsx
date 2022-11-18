import '../stylesheets/style.css';
import React from 'react'
//@ts-ignore
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
import IMG_Python from '../images/skills-icons/python.png';
import IMG_ChromeDevtools from '../images/skills-icons/chrome-devtools.png';
import IMG_GoogleAnalytics from '../images/skills-icons/google-analytics.png';
import IMG_Firebase from '../images/skills-icons/firebase.png';
import IMG_Photoshop from '../images/skills-icons/photoshop.png';
import IMG_Illustrator from '../images/skills-icons/illustrator.png';

function Skills() {
     return(
         <>
            <div id="skills-and-about">
            <h4 className="section-header">Top Technical Skills</h4>
            <div className="skill-card-container">
                <div className="skill-cards">
                    <img src={IMG_Javascript} className="skill-icons"/>
                    <p>JavaScript</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_TypeScript} className="skill-icons"/>
                    <p>TypeScript</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_React} className="skill-icons"/>
                    <p>React</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_HTML5} className="skill-icons"/>
                    <p>HTML5</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_CSS3} className="skill-icons"/>
                    <p>CSS3</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_SASS} className="skill-icons"/>
                    <p>SASS</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_CSS3} className="skill-icons"/>
                    <p>Bootstrap</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_jQuery} className="skill-icons"/>
                    <p>jQuery</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_PHP} className="skill-icons"/>
                    <p>PHP</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Wordpress} className="skill-icons"/>
                    <p>Wordpress</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Git} className="skill-icons"/>
                    <p>Git</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Github} className="skill-icons"/>
                    <p>GitHub</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Webpack} className="skill-icons"/>
                    <p>WebPack</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Babel} className="skill-icons"/>
                    <p>Babel</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Python} className="skill-icons"/>
                    <p>Python</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_ChromeDevtools} className="skill-icons"/>
                    <p>Chrome DevTools</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_GoogleAnalytics} className="skill-icons"/>
                    <p>Google Analytics</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Firebase} className="skill-icons"/>
                    <p>FireBase</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Photoshop} className="skill-icons"/>
                    <p>Photoshop</p>
                </div>
                <div className="skill-cards">
                    <img src={IMG_Illustrator} className="skill-icons"/>
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

export default Skills;