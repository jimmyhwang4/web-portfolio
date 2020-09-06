import React from 'react';

import HeaderProjects from '../components/HeaderProjects';
import ProjectsMenu from '../components/ProjectsMenu';
import Footer from '../components/Footer';

function ProjectsWebImager() {
    return (
        <div>
            <HeaderProjects />
            <ProjectsMenu />
            <div className="wrapperProject">
                <div className="containerProject">
                    <div className="containerTitle">
                        <h4><a href="/projects/web-development">Web Design & Development</a> ➝ Imager</h4>
                    </div>
                    <div className="container2ProjectPage">
                        <video autoPlay controls muted>
                            <source src="/projects/web-dev/imager/imager.mp4" controls type="video/mp4" />
                        </video>
                        <div className="projectPageWeb">
                            <h2>Web View</h2>
                            <div className="projectPageWebImg">
                                <img src="/projects/web-dev/imager/imager-1.png"></img>
                                <img src="/projects/web-dev/imager/imager-2.png"></img>
                                <img src="/projects/web-dev/imager/imager-3.png"></img>
                            </div>
                        </div>
                        <div className="projectPageMobile">
                            <h2>Mobile View</h2>
                            <div className="projectPageMobileImg">
                                <img src="/projects/web-dev/imager/imager-mobile-1.png"></img>
                                <img src="/projects/web-dev/imager/imager-mobile-2.png"></img>
                                <img src="/projects/web-dev/imager/imager-mobile-3.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectsWebImager;