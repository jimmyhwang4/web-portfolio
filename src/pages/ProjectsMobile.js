import React from 'react';

import HeaderProjects from '../components/HeaderProjects';
import HeaderMobile from '../components/HeaderMobile';

function ProjectsMobile() {
    return (
        <div>
            <HeaderProjects />
            <div className="headerMobile">
                <HeaderMobile />
            </div>
                <div className="wrapper">
                    <div className="container">
                        <div className="containerProjectsMobile">
                            <a href="/projects/web-development">
                                <div className="projectsMobile1"></div>
                            </a>
                            <a href="/projects/graphic-design">
                                <div className="projectsMobile2"></div>
                            </a>
                            <a href="/projects/photography">
                                <div className="projectsMobile3"></div>
                            </a>
                            <a href="/projects/music-production">
                                <div className="projectsMobile4"></div>
                            </a>
                            <a href="/projects/sound-design">
                                <div className="projectsMobile5"></div>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProjectsMobile;