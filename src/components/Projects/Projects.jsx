import React from 'react'
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';
import './Projects.scss';

const Projects = () => {
  return (
    <main className='projects-wrapper' id='projects'>
      <Zoom cascade triggerOnce={true}>
        <h1>Recent <span className="green">Projects</span></h1>
        <p>In this section some of my latest projects appear, all of them have been developed with the mobile first methodology.</p>
      </Zoom>

      <div>
        <SliderComp />
      </div>
    </main>
  )
}

export default Projects;