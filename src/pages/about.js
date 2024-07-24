import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from "../images/mattpic.jpeg"


const aboutPage = () => {
    return (
        <div className="aboutApp">
            <div className="container">
                <div className="card-body">
                    <div className="card-header">
                        <h3>About Me</h3>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="row">
                                <div className="aboutMe">
                                    <div className="col-md-3">
                                        <img id="pic" src={ProfilePic} alt="profile pic" width="100%" height="auto%" />
                                    </div>
                                    <div className="col-md-8">
                                        <p className="pgraph">Hello! My name is Matthew Miller and I am a Full-Stack Developer at IMT Software Services. This show-and-tell page gives more insight into my skills and capabilities.</p>
                                        <p className="pgraph">I'm a dynamic, collaborative developer, audio engineer and strong manager/leader. I'm a problem-solver who is passionate about developing software and apps with well-written code</p>
                                        <p className="pgraph">Take a look at my projects and feel free to contact me if you have any questions!</p>
                                    </div>
                                </div>
                                <br />
                                <div>
                                <div className="skills">
                                    <div className="pgraph">
                                        <h2>Work History:</h2>
                                        <br></br>
                                        <h4>IMT Software Services</h4>
                                        <ul>
                                            <li>August 2022 - Present</li>
                                            <li>Full-Stack Developer</li>
                                            <li>Tech Stack: Python, Django, Ember, Javascript</li>
                                            <li>Other Tech Used: AWS, GitHub, Git, Node</li>
                                        </ul>
                                        <h4>Reynolds and Reynolds</h4>
                                        <ul>
                                            <li>August 2021 - August 2022</li>
                                            <li>Software Developer</li>
                                            <li>Application Developer</li>
                                            <li>Tech Stack: React, Typescript, Cobol, PickBasic</li>
                                            <li>Other Tech Used: Git, GitLab, Node</li>
                                        </ul>
                                        </div>
                                </div>
                                <div className="skills">
                                    <div className="pgraph">
                                        <h2>Technical Skills:</h2>
                                        <ul>
                                            <li>Programming Languages: Python, Typescript, Javascript, Cobol, Pick</li>
                                            <li>Libraries/Frameworks: React.js, Ember.js, Django, jQuery, Tailwind, SemanticUi, Bootstrap</li>
                                            <li>Other Technologies: AWS, Node.js, Git</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutPage;