import React, { useState } from 'react';
import './CardList.css';

import { Card } from '../Card';

const CardList = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full">
      <Card />
    </div>
  );
};

export default CardList;
