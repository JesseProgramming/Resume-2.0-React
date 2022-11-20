import React from 'react'
//@ts-ignore
import TeslaPage from '../images/project-pictures/TeslaPage.webp';
//@ts-ignore
import AdminDashboard from '../images/project-pictures/adminDashboard.webp';
//@ts-ignore
import DayDots from '../images/project-pictures/shot1.webp';
//@ts-ignore
import ResumeSite from '../images/project-pictures/resumesite.webp';
//@ts-ignore
import Ecommerce from '../images/project-pictures/preview.webp';

//@ts-ignore
import IMG_Mobile from '../images/icons/mobile-phone.svg';
//@ts-ignore
import IMG_SEO from '../images/icons/web.svg';
//@ts-ignore
import IMG_Accessible from '../images/icons/accessible.svg';
//@ts-ignore
import IMG_Performance from '../images/icons/tachometer-fast-alt.svg';

function Projects() {
    return(
        <>

    <div id="main-projects-container">
        <div id="project-container-alignment">
            <h4 className="section-header">Projects</h4>
            <div id="projects-container">
                <div id="card-container">
                    <div className="card">
                        <img src={TeslaPage} alt="Landing page graphic of Tesla site project"/>
                        <div className="card-body">
                            <h3 className="card-title">
                                Tesla Landing Page Clone
                            </h3>
                            <p className="card-description">
                                A clone project of Tesla's landing page. I've managed to fix several bugs found on the live Tesla site, and managed to score higher rankings in performance and SEO using Google Lighthouse.
                            </p>
                            <div className="card-buttons">
                                <a href="https://jjcprogramming.com/projects/TeslaLanding/index.html" target="_blank"><button type="button" className="btn-projects btn-view-project">View Project</button></a>
                                <a href="https://github.com/JessePython/Tesla-Landing-Page" target="_blank"><button type="button" className="btn-projects btn-view-code">View Code</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={AdminDashboard} alt="Landing page graphic of Admin site project"/>
                        <div className="card-body">
                            <h3 className="card-title">
                                Admin Dashboard
                            </h3>
                            <p className="card-description">
                                A complex multi-page dashboard app to track product sales. Charts were created using Charts.js. Light theme and dark theme available.
                            </p>
                            <div className="card-buttons">
                                <a href="https://jjcprogramming.com/projects/AdminDashboard/index.html" target="_blank"><button type="button" className="btn-projects btn-view-project">View Project</button></a>
                                <a href="https://github.com/JesseProgramming/AdminDashboard" target="_blank"><button type="button" className="btn-projects btn-view-code">View Code</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={DayDots} alt="Landing page graphic of Day Dots site project"/>
                        <div className="card-body">
                            <h3 className="card-title">
                                Day Dots Reference
                            </h3>
                            <p className="card-description">
                                A tool designed to eliminate human error on mislabeling food products, to prevent food waste and health hazards. Deployed in multiple restaurants.
                            </p>
                            <div className="card-buttons">
                                <a href="https://jjcprogramming.com/projects/DayDots/index.html" target="_blank"><button type="button" className="btn-projects btn-view-project">View Project</button></a>
                                <a href="https://github.com/JesseProgramming/DayDotsv4" target="_blank"><button type="button" className="btn-projects btn-view-code">View Code</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={ResumeSite} alt="Landing page graphic of Resume site project, which is this very page!"/>
                        <div className="card-body">
                            <h3 className="card-title">
                                Resume Site 2.0
                            </h3>
                            <p className="card-description">
                                My personal online resume site. Built using scalable code in React so adding new content is simple and all handled in components.
                            </p>
                            <div className="card-buttons">
                                <a href="https://github.com/JesseProgramming/Resume-2.0-React" target="_blank"><button type="button" className="btn-projects btn-view-code">View Code</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Ecommerce}  alt="Blurry picture featuring three phones"/>
                        <div className="card-body">
                            <h3 className="card-title">
                                Ecommerce Site
                            </h3>
                            <p className="card-description">
                                Coming soon.
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                <div id="top-icon-bar">
                    <div className="icon-bar-item">
                        <img src={IMG_Mobile} className="svg-filter" alt="phone graphic for mobile friendliness"/>
                        <p>Mobile Friendly</p>
                    </div>
                    <div className="icon-bar-item">
                        <img src={IMG_SEO} className="svg-filter" alt="globe graphic for search engine optimization"/>
                    <p>Search Engine Optimized</p>
                    </div>
                    <div className="icon-bar-item">
                        <img src={IMG_Accessible} className="svg-filter" alt="person graphic for accessibility"/>
                    <p>Accessible</p>
                    </div>
                    <div className="icon-bar-item">
                        <img src={IMG_Performance} className="svg-filter" alt="gauge graphic for high performance"/>
                    <p>High Performing</p>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    </div>
        </>
    );
}

export default Projects;

