import React from 'react';

import HeaderProjects from '../components/HeaderProjects';
import HeaderMobile from '../components/HeaderMobile';
import ProjectsMenu from '../components/ProjectsMenu';
import Footer from '../components/Footer';

function ProjectsWebCovid19() {
    return (
        <div>
            <HeaderProjects />
            <div className="headerMobile">
                <HeaderMobile />
            </div>
            <ProjectsMenu />
            <div className="wrapperProject">
                <div className="containerProject">
                    <div className="containerTitle">
                        <h4><a href="/projects/web-development">Web Design & Development</a> ➝ COVID-19 Tracker</h4>
                    </div>
                    <div className="container2ProjectPage">
                        <video autoPlay controls muted>
                            <source src="/projects/web-dev/covid-19/covid-19.mp4" controls type="video/mp4" />
                        </video>
                        <div className="projectPageWeb">
                            <h2>Web View</h2>
                            <div className="projectPageWebImg">
                                <img src="/projects/web-dev/covid-19/covid-19-1.png"></img>
                                <img src="/projects/web-dev/covid-19/covid-19-2.png"></img>
                                <img src="/projects/web-dev/covid-19/covid-19-3.png"></img>
                                <img src="/projects/web-dev/covid-19/covid-19-4.png"></img>
                                <img src="/projects/web-dev/covid-19/covid-19-5.png"></img>
                                <img src="/projects/web-dev/covid-19/covid-19-6.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectsWebCovid19;