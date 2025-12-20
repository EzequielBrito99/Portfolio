import React from 'react';
import { Grid } from '@mui/material';
import './Skill.scss';

const Skill = ({ name }) => {
  return (
    <Grid item xs={4} md={2} className="skill-wrapper">
      <img src={`/assets/skills/${name}.svg`} alt={`${name} logo`} />
      <h5 className='green'>{name}</h5>
    </Grid>
  );
};

export default Skill;
