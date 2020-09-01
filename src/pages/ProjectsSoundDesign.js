import React from 'react';

import HeaderProjects from '../components/HeaderProjects';
import ProjectsMenu from '../components/ProjectsMenu';
import Footer from '../components/Footer';

function ProjectsSoundDesign() {
    return (
        <div>
            <HeaderProjects />
            <ProjectsMenu />
            <div className="wrapperProject">
                <div className="containerProject">
                    <div className="containerTitle">
                        <h4>Sound Design & Audio Engineering</h4>
                    </div>
                    <div className="container2ProjectGraphic">
                        <div className="soundContainer">
                            <div className="youtubeContainer">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IAEXmbPNqXo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="youtubeContainer">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YdwStnk9i7c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="youtubeContainer">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Hf9drvaGBBw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="youtubeContainer">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Kws8P5u1Nnc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectsSoundDesign;