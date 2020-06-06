import React, { Component } from "react";
import "./footer.css";
import Fb from "../assets/facebook.png";
import Insta from "../assets/instagram.png";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <hr></hr>
        <div className="footer-tagline1">Liked my work</div>
        <div className="footer-tagline2">
          Let's <span className="work">Work</span> Together!
        </div>
        <div className="footer-getintouch">
          <Link to="/contact">
            <div className="footer-getintouch-text">Get in touch</div>
          </Link>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-part1">
            <div className="footer-contact-part1-text">
              You can reach me for an inquiry or feedback or just to say hi at
            </div>
            <div className="footer-contact-part1-email">
              lsingh@ma.iitr.ac.in
            </div>
          </div>
          <div className="footer-contact-part2">
            <div className="footer-contact-part1-text">
              For more about me, I'm also on instagram & facebook.
            </div>
            <div className="footer-contact-part1-email">
              <img src={Fb}></img>
              <img
                src={Insta}
                style={{
                  paddingLeft: "50px",
                }}
              ></img>
            </div>
          </div>
        </div>
        <div className="footer-rights">
          <div className="footer-rights-name">Lakshya Singh</div>
          <div className="footer-rights-reserved">
            {" "}
            © 2019 · LAKSHYA SINGH · ALL WRONGS REVERSED
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
