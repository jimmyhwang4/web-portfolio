import React from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

function HeaderExperience() {
    return (
        <div className="headerEtc">
            <div className="headerContainer">
                <div className="headerLogo">
                    <h3>JIMMY HWANG</h3>
                </div>
                <div className="headerMenu">
                    <div className="headerContent">
                        <a href="/">HOME</a>
                    </div>
                    <div className="headerContent">
                        <a href="/projects/web-dev">PROJECTS</a>
                    </div>
                    <div className="headerContentSelected">
                        <a href="/experience">EXPERIENCE</a>
                    </div>
                    <div className="headerContent">
                        <a href="/">RESUME</a>
                    </div>
                </div>
                <div className="socialMenu">
                    <a href="https://github.com/jimmyhwang4" target="_blank"><img src={github}></img></a>
                    <a href="https://www.linkedin.com/in/jimmy-hwang-564958162/" target="_blank"><img src={linkedin}></img></a>
                </div>
            </div>
        </div>
    )

}

export default HeaderExperience;

