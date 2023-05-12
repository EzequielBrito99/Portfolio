import React from 'react';
import './Project.scss';

const Project = (props) => {
  const { name, img, disc, urlDemo } = props.item;
  return (
    <div className='project-wrapper project'>
      <img src={`${process.env.PUBLIC_URL}/assets/projects/${img}.png`} alt="project" />
      <div className="disc">
        <h1>{name}</h1>
        <p>{disc}<br/><br/>
        Check: 
          {
            urlDemo
              ?
              <a href={urlDemo} target='_blank' rel='noreferrer'>Live</a>
              :
              <span>private</span>
          }
        </p>
      </div>
    </div>
  )
}

export default Project;