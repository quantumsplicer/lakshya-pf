import React, { Component } from "react";
import "./contact.css";
import Behance from "../assets/behance.svg";
import Dribbble from "../assets/dribbble.svg";
import Lin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact">
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
          <Link to="/contact" style={{ textDecoration: "none", color: "#666" }}>
            <div className="home-navbar-nav-contact" style={{ color: "white" }}>
              Contact
            </div>
          </Link>
        </div>
      </div>
      <div className="home-page1-navigation" style={{ paddingTop: "42vh" }}>
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
      <div className="contact-bw">
        <div className="contact-white">
          <div className="contact-white-main">
            <div className="about-page2-values-tagline">Contact</div>
            <div className="about-page2-values-heading">Get in touch :</div>
            <div className="contact-white-main-headingminor">
              Contact Details
            </div>
            <div className="contact-white-main-text">lsingh@ma.iitr.ac.in</div>
            <div className="contact-white-main-text">+91-9675272749</div>
            <div className="contact-white-main-headingminor">Social Media</div>
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
        <div className="contact-black">
          <div className="contact-black-line1">Don't be shy,</div>
          <div className="contact-black-line2">say Hi.</div>
        </div>
      </div>
    </div>
  );
}
