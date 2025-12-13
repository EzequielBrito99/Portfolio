import React from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NorthIcon from '@mui/icons-material/North';
import './Footer.scss';

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="footer-wrapper" id="footer">
      <div className="profile">
        <h2>Con<span className="green">tact</span></h2>
        <div className="flexbox">
          <div className="links">
            <h1>Contact me <span className="green">directly</span>:</h1>
            <div>
              <span className="green"><WhatsAppIcon /></span>
              <a href="https://wa.me/message/ST66CS7X7BHZM1" target='_blank' rel="noreferrer">Whatsapp</a>
            </div>
            <div>
              <span className="green"><TelegramIcon /></span>
              <a href="https://t.me/ezequielbn" target='_blank' rel="noreferrer">Telegram</a>
            </div>
            <div>
              <span className="green"><MailOutlineIcon /></span>
              <a href="mailto:ebritonavarro@gmail.com" target='_blank' rel="noreferrer">Email</a>
            </div>
          </div>
          <div className="profiles">
            <h1>Check my <span className="green">profiles</span>:</h1>
            <div className="icons">
              <Zoom triggerOnce={true}>
                <span>
                  <a href="https://github.com/EzequielBrito99" target='_blank' rel="noreferrer">
                    <GitHubIcon fontSize='small' />
                  </a>
                </span>
              </Zoom>
              <Zoom triggerOnce={true}>
                <span>
                  <a href="https://www.linkedin.com/in/ezequiel-brito-navarro-a606a9252" target='_blank' rel="noreferrer">
                    <LinkedInIcon fontSize='small' />
                  </a>
                </span>
              </Zoom>
              <Zoom triggerOnce={true}>
                <span>
                  <a href="https://drive.google.com/drive/folders/15oOtQRvlCW_SwstKXpeV6AEgHrrmPI8Q?usp=share_link" target='_blank' rel="noreferrer">
                    <FilePresentIcon fontSize='small' />
                  </a>
                </span>
              </Zoom>
            </div>
            <div className="arrowUp-wrapper">
              <Fade triggerOnce={true}>
                <div className="arrowUp" onClick={scrollUp}>
                  <NorthIcon />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;