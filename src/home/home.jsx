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
  state = {
    activeHam: false,
    activePage: "home",
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
      <div className="home">
        <div
          className="home-navbar"
          style={{
            backgroundColor: this.state.activeHam ? "#191A1E" : "white",
            position: this.state.activeHam ? "fixed" : "relative",
          }}
        >
          <div
            className="home-navbar-name"
            style={{ color: this.state.activeHam ? "white" : "#666" }}
          >
            Lakshya
          </div>
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
          <div className="home-navbar-ham" onClick={this.myfunc}>
            <div
              className="home-navbar-ham1"
              style={{
                backgroundColor: this.state.activeHam ? "white" : "#666",
              }}
            ></div>
            <br></br>
            <div
              className="home-navbar-ham2"
              style={{
                backgroundColor: this.state.activeHam ? "white" : "#666",
              }}
            ></div>
            <br></br>
            <div
              className="home-navbar-ham1"
              style={{
                backgroundColor: this.state.activeHam ? "white" : "#666",
              }}
            ></div>
          </div>
        </div>
        <div
          className="home-navbar-fullscreen"
          style={{ display: this.state.activeHam ? "flex" : "none" }}
        >
          <div className="home-navbar-fullscreen-ham">
            <Link to="/" style={{textDecoration:"none"}}><div className="home-navbar-fullscreen-ham-option" style={{color: "#A58861"}}>Home</div></Link>  
            <Link to="" style={{textDecoration:"none"}}><div className="home-navbar-fullscreen-ham-option">Services</div></Link>
            <Link to="" style={{textDecoration:"none"}}><div className="home-navbar-fullscreen-ham-option">My Work</div></Link>
            <Link to="/about" style={{textDecoration:"none"}}><div className="home-navbar-fullscreen-ham-option">About Me</div></Link>
            <Link to="/contact" style={{textDecoration:"none"}}><div className="home-navbar-fullscreen-ham-option">Contact</div></Link>
          </div>
        </div>
        <div
          className="home-page1-navigation"
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
        <div className="home-page1">
          <div className="home-page1-logo1">
            <img src={Logo} class="home-page1-logo1-img"></img>
          </div>
          <div className="home-page1-introduction">
            <span style={{ color: "#A58861", fontWeight: "bold" }}>
              Hi, I’m Lakshya Singh
            </span>{" "}
            a passionate UI/UX designer focused on producing valuable design
          </div>
          <div className="home-page1-logo2">
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
              <img src={Web} className="home-page2-whatIdo-box-image"></img>
              <div className="home-page2-whatIdo-box-heading">
                Web Design (UI/UX)
              </div>
              <div className="home-page2-whatIdo-box-info">
                My core business is designing pixel perfect websites and
                interfaces.
              </div>
            </div>
            <div className="home-page2-whatIdo-box">
              <img
                src={Illustration}
                className="home-page2-whatIdo-box-image"
              ></img>
              <div className="home-page2-whatIdo-box-heading">Illustration</div>
              <div className="home-page2-whatIdo-box-info">
                In addition to UI/UX, I also make illustrations and animations.
              </div>
            </div>
            <div className="home-page2-whatIdo-box">
              <img
                src={Branding}
                className="home-page2-whatIdo-box-image"
              ></img>
              <div className="home-page2-whatIdo-box-heading">Branding</div>
              <div className="home-page2-whatIdo-box-info">
                Solid branding increases brand recognition and builds customer
                loyalty.
              </div>
            </div>
            <div className="home-page2-whatIdo-box">
              <img
                src={Prototyping}
                className="home-page2-whatIdo-box-image-prototyping"
              ></img>
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
            <div className="home-page3-heading1">Work & Projects</div>
            <div className="home-page3-projects-1"></div>
            <div className="home-page3-projects-2"></div>
            <div className="home-page3-heading2">
              Work <br></br> & Projects
            </div>
            <div className="home-page3-projects-3"></div>
            <div className="home-page3-projects-4"></div>
            <div className="home-page3-projects-5"></div>
          </div>
          <div className="home-page3-viewmore">View More</div>
          <br></br>
          <br></br>
          <br></br>

          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default Home;
