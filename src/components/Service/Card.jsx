import React from 'react';
import './Card.scss';

const Card = (props) => {
  const { Icon, disc, title } = props;
  return (
    <div className='card-wrapper'>
      <span className='green'>
        <Icon className='icon' />
      </span>
      <h1>{title}</h1>
      <p>{disc}</p>
    </div>
  )
}

export default Card;