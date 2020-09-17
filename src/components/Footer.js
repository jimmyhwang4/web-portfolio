import React from 'react';

function Footer() {
    return (
        <div className="footerWrapper">
            <div className="footerContainer">
                <div className="footerColumn">
                    <h2>JIMMY HWANG</h2>
                    <p>Front-end developer graduated from New York University with a BS in Integrated Digital Media</p>
                </div>
                <div className="footerColumn">
                    <h4>Explore</h4>
                    <a href="/">Home</a>
                    <a href="/projects/web-development">Projects</a>
                    <a href="/experience">Experience</a>
                    <a href="/Jeehun_Hwang_Resume.pdf" target="_blank">Resume</a>
                </div>
                <div className="footerColumn">
                    <h4>Works</h4>
                    <a href="/projects/web-development">Web Development</a>
                    <a href="/projects/graphic-design">Graphic Design</a>
                    <a href="/projects/photography">Photography</a>
                    <a href="/projects/music-production">Music Production</a>
                    <a href="/projects/sound-design">Sound Design</a>
                </div>
                <div className="footerColumn">
                    <h4>Socials</h4>
                    <a href="https://github.com/jimmyhwang4" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/jimmy-hwang-564958162/" target="_blank">Linkedin</a>
                </div>
                <div className="footerColumn">
                    <h4>Contact</h4>
                    <a href="mailto:jimmyhwang@nyu.edu">jimmyhwang@nyu.edu</a>
                </div>
            </div>
            <div className="footerContainer">
                <p>Designed and developed by Jimmy Hwang using React.js</p>
            </div>
        </div>
    )
}

export default Footer;