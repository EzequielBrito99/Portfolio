import React from 'react';
import { Grid } from '@mui/material';
import './Skill.scss';

const Skill = ({ name }) => {
  // Esta función resuelve la ruta correctamente tanto en local como en GitHub Pages
  const getImageUrl = (skillName) => {
    return new URL(`../../../public/assets/skills/${skillName}.svg`, import.meta.url).href;
  };

  return (
    <Grid item xs={4} md={2} className="skill-wrapper">
      <img src={getImageUrl(name)} alt={`${name} logo`} />
      <h5 className='green'>{name}</h5>
    </Grid>
  );
};

export default Skill;