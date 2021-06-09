import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import RPG from "../images/Random Password Generator.png";
import WDS from "../images/Work Day Scheduler.png";
import Weather from "../images/Weather Dashboard.png";
import Experience from "../images/EN screenshot.png";
import Note from "../images/notetaker.png";
import EmployeeFind from "../images/employeefind.png";

const projects = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>Projects</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3 work">
                                <a href="https://github.com/Millmr/Random-Password-Generator">
                                    <img src={RPG}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Random Password Generator</p>
                                <p id="repo"><a href="https://millmr.github.io/Random-Password-Generator/" style={{ color: '#FFF' }}>Try it out Here!</a></p>
                            </div>
                            <br></br>
                            <div className="col-md-2"></div>
                            <div className="col-md-3 work">
                                <a href="https://github.com/Millmr/Work-Day-Scheduler">
                                    <img src={WDS}
                                        className="card-img-top" alt="img-two" />
                                </a>
                                <p className="card-text">Work Day Scheduler</p>
                                <p id="repo"><a href="https://millmr.github.io/Work-Day-Scheduler/"
                                style={{ color: '#FFF' }}>Try it out Here!</a></p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3 work">
                                <a href="https://github.com/Millmr/weather-dashboard">
                                    <img src={Weather}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Weather dashboard</p>
                                <p id="repo"><a href="https://millmr.github.io/weather-dashboard/"
                                style={{ color: '#FFF' }}>Try it out Here!</a></p>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-3 work">
                                <a href="https://fathomless-citadel-02367.herokuapp.com/">
                                    <img src={Experience}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Experience Next</p>
                                <p id="repo"><a href="https://github.com/srfujii/Experience_Next"
                                style={{ color: '#FFF' }}>Try it out Here!</a></p>
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
                                <p id="repo"><a href="https://still-mesa-96786.herokuapp.com/"
                                style={{ color: '#FFF' }}>Try it out Here!</a></p>
                            </div>
                            <div className="col-md-2"></div>
                            
                            <div className="col-md-3 work">
                                <a href="https://github.com/Millmr/Employee-Find">
                                    <img src={EmployeeFind}
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Employee Find</p>
                                <p id="repo"><a href="https://millmr.github.io/Employee-Find/"
                                style={{ color: '#FFF' }}>Try it out Here!</a></p>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default projects;