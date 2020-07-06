import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="flex items-center justify-center bg-white rounded-lg min-h-full">
      <div className="text-center cursor-default">
        <h1 className="text-3xl">Lorem</h1>
        <p>lorem ipsum</p>
      </div>
    </div>
  );
};

export default Card;
