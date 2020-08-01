import React from "react";

import Resume from "../content/resume.pdf";

import { InstagramSquare } from "@styled-icons/fa-brands/InstagramSquare";
import { GithubSquare } from "@styled-icons/fa-brands/GithubSquare";
import { Linkedin } from "@styled-icons/fa-brands/Linkedin";
import { Medium } from "@styled-icons/fa-brands/Medium";
import { Google2 } from "@styled-icons/icomoon/Google2";

const About = (props) => {
  return (
    <section className="s2">
      <div className="about-container">
        {/* left */}

        <div className="about-wrapper">
          <div className="about-me">
            <h4>More About Me</h4>
            {props.data.more_about_me}
            <br />
            <br />
            <hr />
            <h4>Top Skills</h4>
            <p>
              Machine Learning Developer with skills in Tensorflow and Pytorch:
              <a target="_blank" rel="noopener noreferrer" href={Resume}>
                Download Resume
              </a>
            </p>

            {/* skills */}
            {props.skills}
          </div>

          {/* right */}

          <div className="social-links">
            <img id="social_img" src={props.data.social} alt="social" />
            <h3>Connect on social media</h3>
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:meet.himanshu.dutta@gmail.com"
              >
                <Google2 size="44.25" style={{ marginRight: "3.5px" }} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="//instagram.com/master_of.none/"
              >
                <InstagramSquare size="50" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="//linkedin.com/in/himanshu-dutta-257875179"
              >
                <Linkedin size="50" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="//github.com/himanshu-dutta"
              >
                <GithubSquare size="50" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="//medium.com/@himanshu_d"
              >
                <Medium size="50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
