import React from 'react';

import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <HeaderHome />
            <div className="wrapper">
                <img src="./filler.jpg" width="100%" height="auto"></img>
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
                            <h4>Anything & Anytime</h4>
                        </a>
                        <a className="passionsBox music" href="/">
                            <h1>MUSIC</h1>
                            <h4>EDM Production</h4>
                        </a>
                    </div>

                    <div className="line"></div>

                    <div className="bigText">
                        <h2>— SKILLS —</h2>
                    </div>
                    <div className="skillsRow">
                        <div className="skillsContainer">
                            <img src="/html.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/css.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/js.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/react.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/node.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/git.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/wordpress.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/photoshop.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/illustrator.png" height="80%" width="auto"></img>
                        </div>
                        <div className="skillsContainer">
                            <img src="/indesign.png" height="80%" width="auto"></img>
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