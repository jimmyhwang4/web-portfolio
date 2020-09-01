import React from 'react';

function ProjectsMenu() {
    return (
        <div className="projectsMenuWrapper">
            <div className="projectsMenuTitle">
                <div className="projectsMenuContent">
                    <h3>PROJECTS</h3>
                </div>
            </div>
            <div className="projectsMenuSubtitle">
                <div className="projectsMenuContent">
                    <h4>VISUAL</h4>
                </div>
            </div>
            <a href="/projects/web-development" className="projectsMenuContainer">
                <div className="projectsMenuContent">
                    <p>Web Development</p>
                </div>
            </a>
            <a href="/projects/graphic-design" className="projectsMenuContainer">
                <div className="projectsMenuContent">
                    <p>Graphic Design</p>
                </div>
            </a>
            <a href="/projects/photography" className="projectsMenuContainer">
                <div className="projectsMenuContent">
                    <p>Photography</p>
                </div>
            </a>
            <div className="projectsMenuSubtitle">
                <div className="projectsMenuContent">
                    <h4>AURAL</h4>
                </div>
            </div>
            <a href="/projects/music-production" className="projectsMenuContainer">
                <div className="projectsMenuContent">
                    <p>Music Production</p>
                </div>
            </a>
            <a href="/projects/sound-design" className="projectsMenuContainer">
                <div className="projectsMenuContent">
                    <p>Sound Design</p>
                </div>
            </a>
        </div>
    )

}

export default ProjectsMenu;