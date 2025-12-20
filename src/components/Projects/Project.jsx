import React from 'react';
import './Project.scss';

const Project = (props) => {
  const { name, img, disc, urlDemo } = props.item;

  // Esta función resuelve la ruta correctamente tanto en local como en GitHub Pages
  const getProjectImageUrl = (imageName) => {
    return new URL(`../../../public/assets/projects/${imageName}.png`, import.meta.url).href;
  };

  return (
    <div className='project-wrapper project'>
      {/* Usamos la función para obtener la URL procesada por Vite */}
      <img src={getProjectImageUrl(img)} alt={`Screenshot of ${name}`} />
      
      <div className="disc">
        <h1>{name}</h1>
        <p>
          {disc}
          <br /><br />
          Check: {
            urlDemo ? (
              <a href={urlDemo} target='_blank' rel='noreferrer'>Live</a>
            ) : (
              <span>private</span>
            )
          }
        </p>
      </div>
    </div>
  );
}

export default Project;