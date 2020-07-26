import React, { Component } from "react";
import "./contact.css";
import Behance from "../assets/behance.svg";
import Dribbble from "../assets/dribbble.svg";
import Lin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    activePage: "contact",
    activeHam: false,
  };

  myfunc = () => {
    if (this.state.activeHam === false) {
      console.log(1);
      this.setState({
        activeHam: true,
      });
    } else {
      this.setState({
        activeHam: false,
      });
    }
  };

  render() {
    return (
      <div className="contact">
        <div
          className="home-navbar-black"
          style={{
            position: this.state.activeHam ? "fixed" : "relative",
            backgroundColor: this.state.activeHam ? "#191a1e" : "black",
          }}
        >
          <div className="home-navbar-name home-navbar-name-black">Lakshya</div>
          <div className="home-navbar-ham" onClick={this.myfunc}>
            <div
              className="home-navbar-ham1"
              style={{
                backgroundColor: "white",
              }}
            ></div>
            <br></br>
            <div
              className="home-navbar-ham2"
              style={{
                backgroundColor: "white",
              }}
            ></div>
            <br></br>
            <div
              className="home-navbar-ham1"
              style={{
                backgroundColor: "white",
              }}
            ></div>
          </div>
        </div>
        <div
          className="contact-navbar about-navbar"
          style={{ position: "Absolute" }}
        >
          <div className="home-navbar-nav">
            <Link to="/" style={{ textDecoration: "none", color: "#666" }}>
              <div className="home-navbar-nav-work" style={{ color: "white" }}>
                Work
              </div>
            </Link>
            <Link to="/about" style={{ textDecoration: "none", color: "#666" }}>
              <div className="home-navbar-nav-about" style={{ color: "white" }}>
                About
              </div>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#666" }}
            >
              <div
                className="home-navbar-nav-contact"
                style={{ color: "white" }}
              >
                Contact
              </div>
            </Link>
          </div>
        </div>
        <div
          className="home-navbar-fullscreen"
          style={{ display: this.state.activeHam ? "flex" : "none" }}
        >
          <div className="home-navbar-fullscreen-ham">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div
                className="home-navbar-fullscreen-ham-option"
              >
                Home
              </div>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <div className="home-navbar-fullscreen-ham-option">Services</div>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <div className="home-navbar-fullscreen-ham-option">My Work</div>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <div className="home-navbar-fullscreen-ham-option">About Me</div>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }} >
              <div className="home-navbar-fullscreen-ham-option" style={{ color: "#A58861" }}>Contact</div>
            </Link>
          </div>
        </div>
        <div
          className="home-page1-navigation"
          style={{ paddingTop: "42vh" }}
          style={{ display: this.state.activeHam ? "block" : "none" }}
        >
          <div className="home-page1-navigation-image">
            <img src={Behance} className="home-page1-navigation-image1"></img>
          </div>
          <div className="home-page1-navigation-image">
            <img src={Dribbble} className="home-page1-navigation-image1"></img>
          </div>
          <div className="home-page1-navigation-image">
            <img src={Lin} className="home-page1-navigation-image1"></img>
          </div>
        </div>
        <div className="contact-bw">
          <div className="contact-black-1">
            <div className="contact-black-line1">Don't be shy,</div>
            <div className="contact-black-line2">say Hi.</div>
          </div>
          <div className="contact-white">
            <div className="contact-white-main">
              <div className="about-page2-values-tagline contact-1">
                Contact
              </div>
              <div className="about-page2-values-heading contact-2">
                Get in touch :
              </div>
              <div className="contact-white-main-headingminor">
                Contact Details
              </div>
              <div className="contact-white-main-text">
                lsingh@ma.iitr.ac.in
              </div>
              <div className="contact-white-main-text">+91-9675272749</div>
              <div className="contact-white-main-headingminor">
                Social Media
              </div>
              <div className="contact-white-main-text">
                https://www.facebook.com/lakshya.singh40000
              </div>
              <div className="contact-white-main-text">
                https://www.instagram.com/kukki___/
              </div>
              <div className="contact-white-main-resume">Download Resume</div>
            </div>
            <div className="contact-white-footer">
              ©2019 · LAKSHYA SINGH · ALL WRONGS REVERSED
            </div>
          </div>
          <div className="contact-black-2">
            <div className="contact-black-line1">Don't be shy,</div>
            <div className="contact-black-line2">say Hi.</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
