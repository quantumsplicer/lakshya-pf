import React, { Component } from "react";
import "./home.css";
import Footer from "../footer/footer";
import Behance from "../assets/behance.svg";
import Dribbble from "../assets/dribbble.svg";
import Lin from "../assets/linkedin.svg";
import Logo from "../assets/logo.png";
import Web from "../assets/web.png";
import Illustration from "../assets/illustration.png";
import Branding from "../assets/branding.png";
import Prototyping from "../assets/prototyping.png";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="home-navbar">
          <div className="home-navbar-name">Lakshya</div>
          <div className="home-navbar-freelance">Available For Freelance</div>
          <div className="home-navbar-nav">
            <Link to="/" style={{ textDecoration: "none", color: "#666" }}>
              <div className="home-navbar-nav-work">Work</div>
            </Link>
            <Link to="/about" style={{ textDecoration: "none", color: "#666" }}>
              <div className="home-navbar-nav-about">About</div>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#666" }}
            >
              <div className="home-navbar-nav-contact">Contact</div>
            </Link>
          </div>
        </div>
        <div className="home-page1-navigation">
          <div className="home-page1-navigation-image">
            <img src={Behance}></img>
          </div>
          <div className="home-page1-navigation-image">
            <img src={Dribbble}></img>
          </div>
          <div className="home-page1-navigation-image">
            <img src={Lin}></img>
          </div>
        </div>
        <div className="home-page1">
          <div className="home-page1-introduction">
            <span style={{ color: "#A58861", fontWeight: "bold" }}>
              Hi, I’m Lakshya Singh
            </span>{" "}
            a passionate UI/UX designer focused on producing valuable design
          </div>
          <div className="home-page1-logo">
            <img src={Logo}></img>
          </div>
        </div>
        <div className="home-page2">
          <div className="home-page2-whatIdo">
            <div className="home-page2-whatIdo-intro">
              <div className="home-page2-whatIdo-intro-heading">What I do</div>
              <div className="home-page2-whatIdo-intro-info">
                As a freelance digital designer, I am here to make you stand out
                in the digital world. The combination of my passion for design
                and your vision will ensure a great end result.
              </div>
            </div>
            <div className="home-page2-whatIdo-box">
              <img src={Web}></img>
              <div className="home-page2-whatIdo-box-heading">
                Web Design (UI/UX)
              </div>
              <div className="home-page2-whatIdo-box-info">
                My core business is designing pixel perfect websites and
                interfaces.
              </div>
            </div>
            <div className="home-page2-whatIdo-box">
              <img src={Illustration}></img>
              <div className="home-page2-whatIdo-box-heading">Illustration</div>
              <div className="home-page2-whatIdo-box-info">
                In addition to UI/UX, I also make illustrations and animations.
              </div>
            </div>
            <div className="home-page2-whatIdo-box">
              <img src={Branding}></img>
              <div className="home-page2-whatIdo-box-heading">Branding</div>
              <div className="home-page2-whatIdo-box-info">
                Solid branding increases brand recognition and builds customer
                loyalty.
              </div>
            </div>
            <div className="home-page2-whatIdo-box">
              <img src={Prototyping}></img>
              <div className="home-page2-whatIdo-box-heading-prototyping">
                Prototyping
              </div>
              <div className="home-page2-whatIdo-box-info">
                I use high fidelity prototypes to learn how your website
                interacts.
              </div>
            </div>
          </div>
        </div>
        <div className="home-page3">
          <div className="home-page3-projects">
            <div className="home-page3-projects-1"></div>
            <div className="home-page3-projects-2"></div>
            <div className="home-page3-heading">
              Work <br></br> & Projects
            </div>
            <div className="home-page3-projects-3"></div>
            <div className="home-page3-projects-4"></div>
            <div className="home-page3-projects-5"></div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default Home;
