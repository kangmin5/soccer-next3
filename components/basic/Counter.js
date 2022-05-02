import React, { useState } from 'react';

export function Counter({ onIncrease, onDecrease, number }) {
  // const [number,setNumber]=useState(0)
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};
