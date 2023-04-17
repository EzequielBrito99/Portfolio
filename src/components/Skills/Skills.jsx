import React from 'react';
import { Grid, Slide } from '@mui/material';
import Skill from './Skill';
import './Skills.scss';

const Skills = () => {

  const skills = ['html', 'css', 'bootstrap', 'sass', 'javascript', 'react', 'redux', 'git', 'github'];

  return (
    <section id='skills' className='skills-wrapper'>
      <h4>
        My <span className="green">skills</span>
      </h4>
      <Grid container spacing={2}>
        {
          skills.map(e=>(
            <Skill key={e} name={e} />
          ))
        }
      </Grid>
    </section>
  );
};

export default Skills;
