import React from 'react';

import HeaderProjects from '../components/HeaderProjects';
import HeaderMobile from '../components/HeaderMobile';
import ProjectsMenu from '../components/ProjectsMenu';
import Footer from '../components/Footer';

import ModalImage from "react-modal-image";

function ProjectsWebCovid19() {
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
                        <h4><a href="/projects/web-development">Web Design & Development</a> ➝ COVID-19 Tracker</h4>
                    </div>
                    <div className="container2ProjectPage">
                        <video autoPlay controls muted>
                            <source src="/projects/web-dev/covid-19/covid-19.mp4" controls type="video/mp4" />
                        </video>
                        <h2>Web View</h2>
                        <div className="projectPageWeb">
                            <div id="projectPageWebImg">
                                <ModalImage
                                    small="/projects/web-dev/covid-19/covid-19-1.png"
                                    large="/projects/web-dev/covid-19/covid-19-1.png"
                                    hideDownload="true"
                                    hideZoom="true"
                                />
                            </div>
                            <div id="projectPageWebImg">
                                <ModalImage
                                    small="/projects/web-dev/covid-19/covid-19-2.png"
                                    large="/projects/web-dev/covid-19/covid-19-2.png"
                                    hideDownload="true"
                                    hideZoom="true"
                                />
                            </div>
                            <div id="projectPageWebImg">
                                <ModalImage
                                    small="/projects/web-dev/covid-19/covid-19-3.png"
                                    large="/projects/web-dev/covid-19/covid-19-3.png"
                                    hideDownload="true"
                                    hideZoom="true"
                                />
                            </div>
                            <div id="projectPageWebImg">
                                <ModalImage
                                    small="/projects/web-dev/covid-19/covid-19-4.png"
                                    large="/projects/web-dev/covid-19/covid-19-4.png"
                                    hideDownload="true"
                                    hideZoom="true"
                                />
                            </div>
                            <div id="projectPageWebImg">
                                <ModalImage
                                    small="/projects/web-dev/covid-19/covid-19-5.png"
                                    large="/projects/web-dev/covid-19/covid-19-5.png"
                                    hideDownload="true"
                                    hideZoom="true"
                                />
                            </div>
                            <div id="projectPageWebImg">
                                <ModalImage
                                    small="/projects/web-dev/covid-19/covid-19-6.png"
                                    large="/projects/web-dev/covid-19/covid-19-6.png"
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

export default ProjectsWebCovid19;