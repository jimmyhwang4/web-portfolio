import React from 'react';

import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <HeaderHome />
            <div className="wrapper">
                <img src="/home/filler.jpg" width="100%" height="auto"></img>
                <div className="container">

                    <div className="bigText">
                        <h2>— PASSIONS —</h2>
                    </div>
                    <div className="passionsRow">
                        <a className="passionsBox design" href="/projects/web-dev">
                            <h1>DESIGN</h1>
                            <h4>Web & Graphic</h4>
                        </a>
                        <a className="passionsBox learning" href="/experience">
                            <h1>LEARNING</h1>
                            <h4>Work & Experience</h4>
                        </a>
                        <a className="passionsBox music" href="/projects/music-production">
                            <h1>MUSIC</h1>
                            <h4>Design & Production</h4>
                        </a>
                    </div>

                    <div className="line"></div>

                    <div className="bigText">
                        <h2>— SKILLS —</h2>
                    </div>
                    <div className="skillsRow">
                        <div className="skillsContainer">
                            <img src="/home/skills/html.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/home/skills/css.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/home/skills/js.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/home/skills/react.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/home/skills/node.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/home/skills/git.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/home/skills/wordpress.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/home/skills/photoshop.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/home/skills/illustrator.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/home/skills/indesign.png" height="80%" width="auto"></img>
                        </div>
                    </div>

                    <div className="line"></div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;