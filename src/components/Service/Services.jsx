import React from "react";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import './Services.scss';

const Services = () => {
  return (
    <section className="services-wrapper" id="services">
      <Slide direction="down" triggerOnce={true}>
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <div className="cards">
        {/* <Slide direction="left"> */}
          <Card
            Icon={DesignServicesIcon}
            title={"ui/ux"}
            disc={`Design and development of user interfaces.`}
          />
        {/* </Slide> */}
        {/* <Slide direction="up"> */}
          <Card
            Icon={PhonelinkIcon}
            title={"responsive"}
            disc={`Development of responsive websites.`}
          />
        {/* </Slide> */}
        {/* <Slide direction="right"> */}
          <Card
            Icon={SettingsSystemDaydreamIcon}
            title={"integration"}
            disc={`API integrations using fetch, axios...`}
          />
        {/* </Slide> */}
      </div>
    </section>
  );
};

export default Services;
