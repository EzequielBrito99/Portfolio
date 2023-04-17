import React from "react";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HandymanIcon from '@mui/icons-material/Handyman';
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
        <Card
          Icon={DesignServicesIcon}
          title={"ui/ux"}
          disc={`Design and development of user interfaces.`}
        />
        <Card
          Icon={HandymanIcon}
          title={"maintenance"}
          disc={`Website maintenance and updating.`}
        />
        <Card
          Icon={SettingsSystemDaydreamIcon}
          title={"integration"}
          disc={`API integrations using fetch or axios.`}
        />
      </div>
    </section>
  );
};

export default Services;
