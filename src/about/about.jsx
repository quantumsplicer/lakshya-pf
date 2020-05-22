import React, { Component } from "react";
import "./about.css";
import Footer from "../footer/footer";
import Behance from "../assets/behance.svg";
import Dribbble from "../assets/dribbble.svg";
import Lin from "../assets/linkedin.svg";
import Food from "../assets/restaurant.png";
import Airplane from "../assets/airplane.png";
import Music from "../assets/music-player.png";
import Video from "../assets/video-editing.png";
import Interlock from "../assets/interlock.png";
import { Link } from "react-router-dom";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        <div className="about-navbar">
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
        <div className="about-page1">
          <div className="about-page1-name">I'm Lakshya</div>
          <div className="about-page1-aboutme">About Me :</div>
          <div className="about-page1-intro">
            <div className="about-page1-intro-image"></div>
            <div className="about-page1-intro-interests">
              <div className="about-page1-intro-text">
                I’m Lakshya Singh a UI/UX designer, and an undergraduate student
                at Indian Institute of Technology Roorkee. I love listening to
                people and solving their problem, so much that I decided to make
                a career out of it.
                <br></br>
                <br></br>I am always ready to accept new challenges and push my
                limits. I have worked from nascent startups to companies and
                believe in learing from practical applications.
              </div>
              <div className="about-page1-crazy">
                <div className="about-page1-crazy-heading">
                  I'm Crazy about :
                </div>
                <div className="about-page1-crazy-stuff">
                  <div className="about-page1-crazy-stuff-individual">
                    <img
                      src={Food}
                      className="about-page1-crazy-stuff-image"
                    ></img>
                    <div className="about-page1-crazy-stuff-heading">Food</div>
                  </div>
                  <div className="about-page1-crazy-stuff-individual">
                    <img
                      src={Music}
                      className="about-page1-crazy-stuff-image"
                    ></img>
                    <div className="about-page1-crazy-stuff-heading">
                      Indie Music
                    </div>
                  </div>
                  <div
                    className="about-page1-crazy-stuff-individual"
                    style={{ width: "100px" }}
                  >
                    <img
                      src={Interlock}
                      className="about-page1-crazy-stuff-image"
                    ></img>
                    <div className="about-page1-crazy-stuff-heading">
                      People
                    </div>
                  </div>

                  <div className="about-page1-crazy-stuff-individual">
                    <img
                      src={Airplane}
                      className="about-page1-crazy-stuff-image"
                    ></img>
                    <div className="about-page1-crazy-stuff-heading">
                      Travelling
                    </div>
                  </div>

                  <div className="about-page1-crazy-stuff-individual">
                    <img
                      src={Video}
                      className="about-page1-crazy-stuff-image"
                    ></img>
                    <div className="about-page1-crazy-stuff-heading">
                      Video Editing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-page2">
          <div className="about-page2-values">
            <div className="about-page2-values-tagline">
              Things you expect from me
            </div>
            <div className="about-page2-values-heading">Thoughts & Values</div>
            <div className="about-page2-values-allthoughts">
              <div className="about-page2-values-individual">
                <div className="about-page2-values-individual-heading">
                  Collaboration.
                </div>
                <div className="about-page2-values-individual-text">
                  I work with you from the very beggining to the final tweaks.
                </div>
              </div>
              <div className="about-page2-values-individual">
                <div className="about-page2-values-individual-heading">
                  Organization.
                </div>
                <div className="about-page2-values-individual-text">
                  Planning all the steps is a key part of the design process.
                </div>
              </div>
              <div className="about-page2-values-individual">
                <div className="about-page2-values-individual-heading">
                  Precision.
                </div>
                <div className="about-page2-values-individual-text">
                  A project’s success can be determined by small details.
                </div>
              </div>
              <div className="about-page2-values-individual">
                <div className="about-page2-values-individual-heading">
                  Responsibility.
                </div>
                <div className="about-page2-values-individual-text">
                  While a design-driven vision is crucial, delivery is also a
                  key factor.
                </div>
              </div>
              <div className="about-page2-values-individual">
                <div className="about-page2-values-individual-heading">
                  Going beyond.
                </div>
                <div className="about-page2-values-individual-text">
                  Sometimes, what you ask for and what you need are different
                  things.
                </div>
              </div>
              <div className="about-page2-values-individual">
                <div className="about-page2-values-individual-heading">
                  Humour.
                </div>
                <div className="about-page2-values-individual-text">
                  Work with what you love and you’ll always have a smile on your
                  face.
                </div>
              </div>
            </div>
          </div>
          <div className="about-page2-friends">
            <div className="about-page2-friends-tagline">
              Friends I’ve made along
            </div>
            <div className="about-page2-friends-heading">Worked With</div>
          </div>
        </div>
        <div className="about-page3">
          <div className="about-page2-values-tagline">
            For me, people matters the most
          </div>
          <div className="about-page2-values-heading">Bit about myself</div>
          <div className="about-page2-values-images">
            <div className="about-page3-images-col1">
              <div className="about-page3-images-col1-image1"></div>
              <div className="about-page3-images-col1-image2"></div>
            </div>
            <div className="about-page2-values-images-col2">
              <div className="about-page3-images-col2-text">
                Whether it is family, friends , bussiness relationships, the
                people around me always had a great impact on me. I love talking
                to others, know their stories and get inspired.
              </div>
              <div className="about-page3-images-col2-image1"></div>
              <div className="about-page3-images-col2-image2"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
