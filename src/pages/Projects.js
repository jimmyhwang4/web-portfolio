import React from 'react';

import HeaderProjects from '../components/HeaderProjects';
import ProjectsMenu from '../components/ProjectsMenu';
import Footer from '../components/Footer';

function Projects() {
    return (
        <div>
            <HeaderProjects />
            <ProjectsMenu />
            <div className="wrapperProject">
                <div className="containerProject">
                    <div className="container2Project">
                        <div className="webBoxContainer">
                            <div className="webBox1"></div>
                        </div>
                        <div className="webBoxContainer">
                            <div className="webBox2"></div>
                        </div>
                        <div className="webBoxContainer">
                            <div className="webBox3"></div>
                        </div>
                        <div className="webBoxContainer">
                            <div className="webBox4"></div>
                        </div>
                        <div className="webBoxContainer">
                            <div className="webBox5"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects;