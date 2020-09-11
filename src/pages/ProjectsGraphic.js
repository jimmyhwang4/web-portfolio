import React from 'react';

import HeaderProjects from '../components/HeaderProjects';
import ProjectsMenu from '../components/ProjectsMenu';
import Footer from '../components/Footer';

function ProjectsGraphic() {
    return (
        <div>
            <HeaderProjects />
            <ProjectsMenu />
            <div className="wrapperProject">
                <div className="containerProject">
                    <div className="containerTitle">
                        <h4>Graphic Design</h4>
                    </div>
                    <div className="container2ProjectGraphic">
                        <div className="galleryContainer">
                            <img src="/projects/graphic-design/YLA-Apply-Now-1.jpg"></img>
                            <img src="/projects/graphic-design/YLA-Apply-Now-2.jpg"></img>
                            <img src="/projects/graphic-design/YLA-Apply-Now-3.jpg"></img>
                            <img src="/projects/graphic-design/GT-Email.jpg"></img>
                            <img src="/projects/graphic-design/navi1.jpg"></img>
                            <img src="/projects/graphic-design/navi2.jpg"></img>
                            <img src="/projects/graphic-design/navi3.jpg"></img>
                            <img src="/projects/graphic-design/navi4.jpg"></img>
                            <img src="/projects/graphic-design/PDP-FA18-Front.jpg"></img>
                            <img src="/projects/graphic-design/PDP-FA18-Back.jpg"></img>
                            <img src="/projects/graphic-design/PDP-SPR19-Front.jpg"></img>
                            <img src="/projects/graphic-design/PDP-SPR19-Back.jpg"></img>
                            <img src="/projects/graphic-design/PDP-Alpha-Sigma.jpg"></img>
                            <img src="/projects/graphic-design/PDP-Alpha-Upsilon.jpg"></img>
                            <img src="/projects/graphic-design/PDP-Boba.jpg"></img>
                            <img src="/projects/graphic-design/milk1.jpg"></img>
                            <img src="/projects/graphic-design/milk2.jpg"></img>
                            <img src="/projects/graphic-design/milk3.jpg"></img>
                            <img src="/projects/graphic-design/creative-coding.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectsGraphic;