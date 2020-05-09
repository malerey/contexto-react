import React from 'react';
import Card from './Card';
const CardContainer = ({cards}) => {
  return <div className="App">
  {cards.map(card => <Card data={card}/>)}
  </div>;
};

export default CardContainer;
