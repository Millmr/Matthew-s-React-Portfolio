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
                    <div>
                        <div className="gitProfile">
                            <p>GitHub Profile: <a href="https://github.com/Millmr" target="_blank" rel="noreferrer">Click to see!</a></p>
                            <p>Linkedin Profile: <a href="https://www.linkedin.com/in/matthew-miller-9884a720a/" target="_blank" rel="noreferrer">Connect with me on Linkedin!</a></p>
                            <p>Email Address: <a href="mailto:matt.r.miller09@gmail.com">matt.r.miller09@gmail.com</a></p>
                            <p>Phone Number: <a href="tel:5152497049">(515) 249-7049</a></p>
                            <p><a href={Resume} target="_blank" rel="noreferrer">View My Resume</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;