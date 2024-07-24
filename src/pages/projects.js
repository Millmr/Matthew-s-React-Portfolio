import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css/';
import RPG from "../images/Random Password Generator.jpg";
import WDS from "../images/Work Day Scheduler.jpg";
import Weather from "../images/Weather Dashboard.jpg";
import Experience from "../images/EN screenshot.jpg";
import Note from "../images/notetaker.jpg";
import EmployeeFind from "../images/employeefind.jpg";

const projects = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card-body">
                    <div className="card-header">
                        <h3>Projects</h3>
                    </div>
                    <div className="card-body">
                        <div className="projects">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-3 work">
                                    <a href="https://millmr.github.io/Random-Password-Generator/">
                                        <img src={RPG}
                                            className="card-img-top" alt="img-one" />
                                    </a>
                                    <p className="card-text">Random Password Generator</p>
                                    <p id="repo"><a href="https://github.com/Millmr/Random-Password-Generator" style={{ color: '#FFF' }}>Check out the code!</a></p>
                                </div>
                                <br></br>
                                <div className="col-md-2"></div>
                                <div className="col-md-3 work">
                                    <a href="https://millmr.github.io/Work-Day-Scheduler/">
                                        <img src={WDS}
                                            className="card-img-top" alt="img-two" />
                                    </a>
                                    <p className="card-text">Work Day Scheduler</p>
                                    <p id="repo"><a href="https://github.com/Millmr/Work-Day-Scheduler"
                                    style={{ color: '#FFF' }}>Check out the code!</a></p>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-3 work">
                                    <a href="https://millmr.github.io/weather-dashboard/">
                                        <img src={Weather}
                                            className="card-img-top" alt="img-one" />
                                    </a>
                                    <p className="card-text">Weather dashboard</p>
                                    <p id="repo"><a href="https://github.com/Millmr/weather-dashboard"
                                    style={{ color: '#FFF' }}>Check out the code!</a></p>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-3 work">
                                    <a href="https://millmr.github.io/Employee-Find/">
                                        <img src={EmployeeFind}
                                            className="card-img-top" alt="img-one" />
                                    </a>
                                    <p className="card-text">Employee Find</p>
                                    <p id="repo"><a href="https://github.com/Millmr/Employee-Find"
                                    style={{ color: '#FFF' }}>Check out the code!</a></p>
                                    <div className="col-md-1"></div>
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-3 work">
                                    <a href="https://github.com/Millmr/Note-Taker">
                                        <img src={Note}
                                            className="card-img-top" alt="img-one" />
                                    </a>
                                    <p className="card-text">Note Taker</p>
                                    <p id="repo">This was deployed with Heroku which I no longer have. Take a look at the repo in the meantime</p>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-3 work">
                                <a href="https://github.com/srfujii/Experience_Next">
                                    <img src={Experience}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Experience Next</p>
                                <p id="repo">This was deployed with Heroku which I no longer have. Take a look at the repo in the meantime</p>
                                <div className="col-md-1"></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projects;