'use client'
import React, { useState, useMemo } from 'react';

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);

  // Expensive calculation function
  const calculateExpensiveValue = (input) => {
    console.log('Calculating expensive value...');
    // Assume a time-consuming computation
    return input * 2;
  };

  // Use useMemo to memoize the result of the expensive calculation
  const memoizedValue = useMemo(() => calculateExpensiveValue(count), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExpensiveComponent;
