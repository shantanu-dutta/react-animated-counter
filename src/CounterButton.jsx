import React, { useState } from 'react';

import { ReactComponent as StarFill } from './assets/star-fill.svg';
import { ReactComponent as StarOutline } from './assets/star-outline.svg';

import './styles.css';

const CounterButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(100);

  const onClick = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
      setCount((prev) => prev + 1);
    }
  };

  return (
    <button
      onClick={onClick}
      className={`counter-button ${isClicked ? 'clicked' : 'idle'}`}
    >
      <div className="icons">
        <div className="icons-sm">
          <StarFill height={8} width={8} className="fill-1" />
          <StarFill height={12} width={12} className="fill-2" />
          <StarOutline height={14} width={14} className="outline-1" />
          <StarOutline height={20} width={20} className="outline-2" />
        </div>
        <StarOutline className="outline" />
        <StarFill className="fill" />
      </div>
      <span className="count">{count}</span>
    </button>
  );
};

export default CounterButton;
