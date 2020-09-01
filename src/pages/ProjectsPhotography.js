import React from 'react';

import HeaderProjects from '../components/HeaderProjects';
import ProjectsMenu from '../components/ProjectsMenu';
import Footer from '../components/Footer';

function ProjectsPhotography() {
    return (
        <div>
            <HeaderProjects />
            <ProjectsMenu />
            <div className="wrapperProject">
                <div className="containerProject">
                    <div className="containerTitle">
                        <h4>Photography & Editing</h4>
                    </div>
                    <div className="container2ProjectGraphic">
                        <div className="galleryContainerPhoto">
                            <img src="/projects/photography/FA18-Brandon.jpg"></img>
                            <img src="/projects/photography/FA18-Josh.jpg"></img>
                            <img src="/projects/photography/FA18-Karan.jpg"></img>
                            <img src="/projects/photography/FA18-Paul.jpg"></img>
                            <img src="/projects/photography/FA18-Sean.jpg"></img>
                            <img src="/projects/photography/FA18-Yuro.jpg"></img>
                            <img src="/projects/photography/FA18-Zhong.jpg"></img>
                            <img src="/projects/photography/justina-lido.jpg"></img>
                            <img src="/projects/photography/justina-grad.jpg"></img>
                            <img src="/projects/photography/nyc1.jpg"></img>
                            <img src="/projects/photography/nyc2.jpg"></img>
                            <img src="/projects/photography/nyc3.jpg"></img>
                            <img src="/projects/photography/nyc4.jpg"></img>
                            <img src="/projects/photography/nyc5.jpg"></img>
                            <img src="/projects/photography/nyc6.jpg"></img>
                            <img src="/projects/photography/edit1.jpg"></img>
                            <img src="/projects/photography/edit2.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectsPhotography;