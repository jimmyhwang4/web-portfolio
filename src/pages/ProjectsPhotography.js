import React from 'react';

import HeaderProjects from '../components/HeaderProjects';
import HeaderMobile from '../components/HeaderMobile';
import ProjectsMenu from '../components/ProjectsMenu';
import Footer from '../components/Footer';

import ModalImage from "react-modal-image";

function ProjectsPhotography() {
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
                        <h4>Photography & Editing</h4>
                    </div>
                    <div className="container2ProjectGraphic">
                        <div id="galleryContainerPhoto">
                            <ModalImage
                                small="/projects/photography/FA18-Brandon.jpg"
                                large="/projects/photography/FA18-Brandon.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/FA18-Josh.jpg"
                                large="/projects/photography/FA18-Josh.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/FA18-Karan.jpg"
                                large="/projects/photography/FA18-Karan.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/FA18-Paul.jpg"
                                large="/projects/photography/FA18-Paul.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/FA18-Sean.jpg"
                                large="/projects/photography/FA18-Sean.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/FA18-Yuro.jpg"
                                large="/projects/photography/FA18-Yuro.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/FA18-Zhong.jpg"
                                large="/projects/photography/FA18-Zhong.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/justina-lido.jpg"
                                large="/projects/photography/justina-lido.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/justina-grad.jpg"
                                large="/projects/photography/justina-grad.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/nyc1.jpg"
                                large="/projects/photography/nyc1.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/nyc2.jpg"
                                large="/projects/photography/nyc2.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/nyc3.jpg"
                                large="/projects/photography/nyc3.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/nyc4.jpg"
                                large="/projects/photography/nyc4.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/nyc5.jpg"
                                large="/projects/photography/nyc5.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/nyc6.jpg"
                                large="/projects/photography/nyc6.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/edit1.jpg"
                                large="/projects/photography/edit1.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/photography/edit2.jpg"
                                large="/projects/photography/edit2.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectsPhotography;