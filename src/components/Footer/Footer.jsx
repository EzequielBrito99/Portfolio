import React from "react";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
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
        {/* <Slide direction="right" delay={1}> */}
          <h2>Con<span className="green">tact</span></h2>
        {/* </Slide> */}
        <div className="flexbox">
          <div className="links">
            {/* <Slide direction="left"> */}
              <h1>Contact me <span className="green">directly</span>:</h1>
            {/* </Slide> */}
            <div>
              <span className="green"><WhatsAppIcon /></span>
              {/* <Slide direction="left"> */}
                <a href="https://wa.me/message/ST66CS7X7BHZM1" target='_blank'>Whatsapp</a>
              {/* </Slide> */}
            </div>
            <div>
              {/* <Slide direction="left"> */}
                <span className="green"><TelegramIcon /></span>
              {/* </Slide> */}
              {/* <Slide> */}
                <a href="https://t.me/ezequielbn" target='_blank'>Telegram</a>
              {/* </Slide> */}
            </div>
            <div>
              {/* <Slide direction="left"> */}
                <span className="green"><MailOutlineIcon /></span>
              {/* </Slide> */}
              {/* <Slide> */}
                <a href="mailto:ebritonavarro@gmail.com" target='_blank'>Email</a>
                {/* </Slide> */}
            </div>
          </div>
          <div className="profiles">
            {/* <Slide direction="right"> */}
              <h1>Check my <span className="green">profiles</span>:</h1>
            {/* </Slide> */}
            <div className="icons">
              <Zoom triggerOnce={true}>
                <span>
                  <a href="https://github.com/EzequielBrito99" target='_blank'>
                    <GitHubIcon fontSize='small' />
                  </a>
                </span>
              </Zoom>
              <Zoom triggerOnce={true}>
                <span>
                  <a href="https://www.linkedin.com/in/ezequiel-brito-navarro-a606a9252" target='_blank'>
                    <LinkedInIcon fontSize='small' />
                  </a>
                </span>
              </Zoom>
              <Zoom triggerOnce={true}>
                <span>
                  <a href="https://drive.google.com/drive/folders/15oOtQRvlCW_SwstKXpeV6AEgHrrmPI8Q?usp=share_link" target='_blank'>
                    <FilePresentIcon fontSize='small' />
                  </a>
                </span>
              </Zoom>
            </div>
            <div>
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