import React from 'react';
import './card.css';

const Card = ({country, symbol, img, rate}) => {
  return (
    <div className='card'>
      <img src={img} alt={symbol} />
      <div className='container'>
        <h1>{symbol}</h1>
        <h2>{country}</h2>
        <p>{rate}</p>
      </div>
      
    </div>
  )
}

export default Card;
