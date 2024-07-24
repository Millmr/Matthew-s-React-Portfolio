import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Resume from "../PDF/Matthew R Miller Resume June 2021.pdf"

const Contact = () => {
    return (
        <div className="portfolioApp">
            <div className="containerTwo">
                <div className="card-body">
                    <div className="card-header">
                        <h3>Contact</h3>
                    </div>
                    <div className="card-body">
                        <div className="row"></div>
                            <div className="gitProfile">
                                <p>GitHub Profile: <a href="https://github.com/Millmr">
                                Click to see!</a> </p>
                                <p>Linkedin Profile: <a href="https://www.linkedin.com/in/matthew-miller-9884a720a/"
                                >Connect with me on Linkedin!</a></p>
                                <p>Email Address: matt.r.miller09@gmail.com</p>
                                <p>Phone Number:(515)249-7049</p>
                                <a href={Resume}
                                > Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    )
}

export default Contact;