import React from 'react';

import HeaderProjects from '../components/HeaderProjects';
import HeaderMobile from '../components/HeaderMobile';
import ProjectsMenu from '../components/ProjectsMenu';
import Footer from '../components/Footer';

import ModalImage from "react-modal-image";

function ProjectsWebImager() {
    return (
        <div>
            <HeaderProjects />
            <div className="headerMobile">
                <HeaderMobile />
            </div>
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
                        <h2>Web View</h2>
                        <div className="projectPageWeb">
                            <div id="projectPageWebImg">
                                <ModalImage
                                    small="/projects/web-dev/imager/imager-1.png"
                                    large="/projects/web-dev/imager/imager-1.png"
                                    hideDownload="true"
                                    hideZoom="true"
                                />
                            </div>
                            <div id="projectPageWebImg">
                                <ModalImage
                                    small="/projects/web-dev/imager/imager-2.png"
                                    large="/projects/web-dev/imager/imager-2.png"
                                    hideDownload="true"
                                    hideZoom="true"
                                />
                            </div>
                            <div id="projectPageWebImg">
                                <ModalImage
                                    small="/projects/web-dev/imager/imager-3.png"
                                    large="/projects/web-dev/imager/imager-3.png"
                                    hideDownload="true"
                                    hideZoom="true"
                                />
                            </div>
                        </div>
                        <h2>Mobile View</h2>
                        <div className="projectPageMobile">
                            <div id="projectPageMobileImg">
                                <ModalImage
                                    small="/projects/web-dev/imager/imager-mobile-1.png"
                                    large="/projects/web-dev/imager/imager-mobile-1.png"
                                    hideDownload="true"
                                    hideZoom="true"
                                />
                            </div>
                            <div id="projectPageMobileImg">
                                <ModalImage
                                    small="/projects/web-dev/imager/imager-mobile-2.png"
                                    large="/projects/web-dev/imager/imager-mobile-2.png"
                                    hideDownload="true"
                                    hideZoom="true"
                                />
                            </div>
                            <div id="projectPageMobileImg">
                                <ModalImage
                                    small="/projects/web-dev/imager/imager-mobile-3.png"
                                    large="/projects/web-dev/imager/imager-mobile-3.png"
                                    hideDownload="true"
                                    hideZoom="true"
                                />
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