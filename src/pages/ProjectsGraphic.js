import React from 'react';

import HeaderProjects from '../components/HeaderProjects';
import HeaderMobile from '../components/HeaderMobile';
import ProjectsMenu from '../components/ProjectsMenu';
import Footer from '../components/Footer';

import ModalImage from "react-modal-image";

function ProjectsGraphic() {
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
                        <h4>Graphic Design</h4>
                    </div>
                    <div className="container2ProjectGraphic">
                        <div id="galleryContainer">
                            <ModalImage
                                small="/projects/graphic-design/YLA-Apply-Now-1.jpg"
                                large="/projects/graphic-design/YLA-Apply-Now-1.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/YLA-Apply-Now-2.jpg"
                                large="/projects/graphic-design/YLA-Apply-Now-2.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/YLA-Apply-Now-3.jpg"
                                large="/projects/graphic-design/YLA-Apply-Now-3.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/GT-Email.jpg"
                                large="/projects/graphic-design/GT-Email.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/navi1.jpg"
                                large="/projects/graphic-design/navi1.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/navi2.jpg"
                                large="/projects/graphic-design/navi2.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/navi3.jpg"
                                large="/projects/graphic-design/navi3.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/navi4.jpg"
                                large="/projects/graphic-design/navi4.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/PDP-FA18-Front.jpg"
                                large="/projects/graphic-design/PDP-FA18-Front.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/PDP-FA18-Back.jpg"
                                large="/projects/graphic-design/PDP-FA18-Back.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/PDP-SPR19-Front.jpg"
                                large="/projects/graphic-design/PDP-SPR19-Front.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/PDP-SPR19-Back.jpg"
                                large="/projects/graphic-design/PDP-SPR19-Back.jpg"
                                hideDownload="true"
                                hideZoom="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/PDP-Alpha-Sigma.jpg"
                                large="/projects/graphic-design/PDP-Alpha-Sigma.jpg"
                                hideDownload="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/PDP-Alpha-Upsilon.jpg"
                                large="/projects/graphic-design/PDP-Alpha-Upsilon.jpg"
                                hideDownload="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/PDP-Boba.jpg"
                                large="/projects/graphic-design/PDP-Boba.jpg"
                                hideDownload="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/milk1.jpg"
                                large="/projects/graphic-design/milk1.jpg"
                                hideDownload="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/milk2.jpg"
                                large="/projects/graphic-design/milk2.jpg"
                                hideDownload="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/milk3.jpg"
                                large="/projects/graphic-design/milk3.jpg"
                                hideDownload="true"
                            />
                            <ModalImage
                                small="/projects/graphic-design/creative-coding.jpg"
                                large="/projects/graphic-design/creative-coding.jpg"
                                hideDownload="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectsGraphic;