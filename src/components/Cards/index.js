import React from 'react';
import { lists } from "../../assets/cards-lists"
import "./style.css";
import Card from './card';


function Cards( ) {
  return (
    <div className='cards-flex'>
        {lists.map((card, i) => (
        <Card card={card} key={i}/>
        ))}
      </div>
  );
}

export default Cards;
