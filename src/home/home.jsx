import React, { Component } from "react";
import "./home.css";
import Behance from "../assests/behance.svg";
import Dribbble from "../assests/dribbble.svg";
import Lin from "../assests/linkedin.svg";
import Logo from "../assests/logo.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="home-navbar">
          <div className="home-navbar-name">Lakshya</div>
          <div className="home-navbar-freelance">Available For Freelance</div>
          <div className="home-navbar-nav">
            <div className="home-navbar-nav-work">Work</div>
            <div className="home-navbar-nav-about">About</div>
            <div className="home-navbar-nav-contact">Contact</div>
          </div>
        </div>
        <div className="home-page1">
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
          <div className="home-page1-introduction">
            <span style={{ color: "#A58861", fontWeight: "bold" }}>
              Hi, I’m Lakshya Singh
            </span>{" "}
            a passionate UI/UX designer focused on producing valuable design
          </div>
          <div className="home-page1-logo"><img src={Logo}></img></div>
        </div>
        <div className="home-page2"></div>
        <div className="home-page3"></div>
      </div>
    );
  }
}

export default Home;
