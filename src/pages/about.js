import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from "../images/mattpic.jpeg"


const aboutPage = () => {
    return (
        <div className="aboutApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>About Me</h3>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="row">
                                <div className="col-md-3">
                                    <img id="pic" src={ProfilePic} alt="profile pic" width="100%" height="auto%" />
                                </div>
                                <div className="col-md-8">
                                    <p className="pgraph">Hello! My name is Matthew Miller and I am a Full-Stack Developer.  I recently completed Rice University's full-stack coding boot camp. This show-and-tell page gives more insight into my coding skills and capabilities.</p>
                                    <p className="pgraph">Born and raised in the midwest state of Iowa, I recently moved to Houston, Texas to pursue my dream of becoming an IT professional.  The coding boot camp was a great choice for me.  It has been a lot of fun and affirmed my passion for this field.</p>
                                    <p className="pgraph">My goal is to land a position where I can apply my education, knowledge, and passion in a meaninful way as a Full-Stack Developer</p>
                                    <p className="pgraph">Take a look at my projects and feel free to contact me if you have any questions!</p>
                                </div>
                                <br />
                                <div>
                                <div className="skills">
                                    <h2>Technical Skills:</h2>
                                    <ul>
                                        <li>Programming Languages: HTML, CSS, Javascript</li>
                                        <li>Database Management: MySQL, Sequelize, MongoDB, Mongoose</li>
                                        <li>Libraries/Frameworks: jQuery, React.js, Material-UI, Express.js, Bootstrap, Materilize</li>
                                        <li>Other Technologies: Node.js, Handlebars, Git, Heroku, AuthO, API's</li>
                                    </ul>
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