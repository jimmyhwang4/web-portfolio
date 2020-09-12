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
                    <div className="containerTitle">
                        <h4>Web Design & Development</h4>
                    </div>
                    <div className="container2Project">
                        <div className="webBoxContainer">
                            <div className="webBox1">
                                <h1>Imager</h1>
                                <p>Image search using Imgur API</p>
                                <div id="webLinks">
                                    <div className="webLinksWidth">
                                        <div className="webLinksContent">
                                            <a href="/projects/web-development/imager"><img src="/socials/website.png" width="30px" height="auto"></img></a>
                                        </div>
                                        <div className="webLinksContent">
                                            <a href="https://github.com/jimmyhwang4/imager" target="_blank"><img src="/socials/github.png" width="30px" height="auto"></img></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="webBoxContainer">
                            <div className="webBox2">
                                <h1>COVID-19 Tracker</h1>
                                <p>Using Heroku API & News API</p>
                                <div id="webLinks">
                                    <div className="webLinksWidth">
                                        <div className="webLinksContent">
                                            <a href="/projects/web-development/covid-19-tracker"><img src="/socials/website.png" width="30px" height="auto"></img></a>
                                        </div>
                                        <div className="webLinksContent">
                                            <a href="https://github.com/jimmyhwang4/covid-19-tracker" target="_blank"><img src="/socials/github.png" width="30px" height="auto"></img></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="webBoxContainer">
                            <div className="webBox3">
                                <h1>Weather App</h1>
                                <p>Using OpenWeather API</p>
                                <div id="webLinks">
                                    <div className="webLinksWidth">
                                        <div className="webLinksContent">
                                            <a href="https://jimmy-weather-app.netlify.app" target="_blank"><img src="/socials/website.png" width="30px" height="auto"></img></a>
                                        </div>
                                        <div className="webLinksContent">
                                            <a href="https://github.com/jimmyhwang4/weather-app" target="_blank"><img src="/socials/github.png" width="30px" height="auto"></img></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="webBoxContainer">
                            <div className="webBox4">
                                <h1>Jang Soo Sushi Bar</h1>
                                <p>Official website</p>
                                <div id="webLinks">
                                    <div className="webLinksWidth">
                                        <div className="webLinksContent">
                                            <a href="https://www.jangsoosushibar.com/" target="_blank"><img src="/socials/website.png" width="30px" height="auto"></img></a>
                                        </div>
                                        <div className="webLinksContent">
                                            <a href="https://github.com/jimmyhwang4/jang_soo_sushi_bar" target="_blank"><img src="/socials/github.png" width="30px" height="auto"></img></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="webBoxContainer">
                            <div className="webBox5">
                                <h1>CSS Sketchbook</h1>
                                <p>Images drawn with CSS</p>
                                <div id="webLinks">
                                    <div className="webLinksWidth">
                                        <div className="webLinksContent">
                                            <a href="https://css-sketchbook.netlify.app/" target="_blank"><img src="/socials/website.png" width="30px" height="auto"></img></a>
                                        </div>
                                        <div className="webLinksContent">
                                            <a href="https://github.com/jimmyhwang4/css-sketchbook" target="_blank"><img src="/socials/github.png" width="30px" height="auto"></img></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects;