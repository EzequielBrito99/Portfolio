import React from "react";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import HandymanIcon from '@mui/icons-material/Handyman';
import SpeedIcon from '@mui/icons-material/Speed';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import StorageIcon from '@mui/icons-material/Storage';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import './Services.scss';

const Services = () => {
  return (
    <section className="services-wrapper" id="services">
      <Slide direction="down" triggerOnce={true}>
        <h4 data-testid="section-title">
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <div>
        <div className="cards">
          <Card
            Icon={DesignServicesIcon}
            title={"ui/ux"}
            disc={`Design and development of user interfaces.`}
          />
          <Card
            Icon={HandymanIcon}
            title={"maintenance"}
            disc={`Website maintenance and migrations.`}
          />
          <Card
            Icon={SpeedIcon}
            title={"performance"}
            disc={`Optimization of website performance and loading speed.`}
          />
        </div>
        <div className="cards">
          <Card
            Icon={DeviceHubIcon}
            title={"rest-full api development"}
            disc={`Design of scalable and modular architectures.`}
          />
          <Card
            Icon={StorageIcon}
            title={"database management"}
            disc={`Database modeling, optimization, and management.`}
          />
          <Card
            Icon={HourglassTopIcon}
            title={"real-time systems"}
            disc={`Implementation of bidirectional communication and instant notifications using WebSockets..`}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
