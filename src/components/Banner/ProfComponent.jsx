import React from "react";
import { Fade } from "react-awesome-reveal";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';
import './ProfComponent.scss';

const ProfComponent = () => {
  return (
    <section id="home" className="prof-wrapper">
      <div className="texts">
        <h4>
          Hello <span className="green">I am</span>
        </h4>
        <h1 className="green">Ezequiel Brito</h1>
        <Fade cascade triggerOnce={true}>
          <h3>Front-End Developer</h3>
          <p>
            I am passionate about technology and love creating unique web experiences. Throughout my career, I have worked on challenging projects, where I have had the opportunity to apply my skills to create responsive, intuitive, and visually appealing websites.
          </p>
        </Fade>
        <a href='https://wa.me/message/ST66CS7X7BHZM1' target='_blank' rel="noreferrer">Let's talk</a>
        <a href='https://drive.google.com/drive/folders/15oOtQRvlCW_SwstKXpeV6AEgHrrmPI8Q?usp=share_link' target='_blank' rel="noreferrer" className="cv-button">Check CV</a>
        <div className="social">
          <p>Check out my</p>
          <Fade className="social-icons" direction="right" delay={1000} cascade damping={.3} triggerOnce={true}>
            <Tooltip arrow title="GutHub">
              <span>
                <a href="https://github.com/EzequielBrito99" target='_blank' rel="noreferrer">
                  <GitHubIcon fontSize='small' />
                </a>
              </span>
            </Tooltip>
            <Tooltip arrow title="LinkedIn">
              <span>
                <a href="https://www.linkedin.com/in/ezequiel-brito-navarro-a606a9252" target='_blank' rel="noreferrer">
                  <LinkedInIcon fontSize='small' />
                </a>
              </span>
            </Tooltip>
          </Fade>
        </div>
      </div>
      <div className="profile">
        <img
          src={`${process.env.PUBLIC_URL}/assets/banner/bannerImageAnimated.svg`}
          alt="profile"
        />
      </div>
    </section>
  );
};

export default ProfComponent;
