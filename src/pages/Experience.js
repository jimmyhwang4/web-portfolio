import React from 'react';

import HeaderExperience from '../components/HeaderExperience';
import Footer from '../components/Footer';

function Experience() {
    return (
        <div>
            <HeaderExperience />
            <div className="wrapper">
                <div className="experienceHeader"></div>
                <div className="container">
                    <div className="containerExperience">

                        <div className="bigText">
                            <h2>— JOBS —</h2>
                        </div>
                        <div className="experienceBox1"></div>
                        <div className="experienceBox2"></div>

                        <div className="line"></div>

                        <div className="bigText">
                            <h2>— INTERNSHIPS —</h2>
                        </div>
                        <div className="experienceBox3"></div>
                        <div className="experienceBox4"></div>
                        <div className="experienceBox5"></div>

                        <div className="line"></div>

                        <div className="bigText">
                            <h2>— EDUCATION —</h2>
                        </div>
                        <div className="experienceBox6"></div>

                    </div>
                </div>
                {/* <div className="containerExperience">
                    <div className="experienceBox1"></div>
                    <div className="experienceBox2"></div>
                    <div className="experienceBox3"></div>
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Experience;