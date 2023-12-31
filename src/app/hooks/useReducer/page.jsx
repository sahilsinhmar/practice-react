'use client'
import React, { useReducer } from 'react'
import CounterReducer from '@/lib/counterReducer'

const Counter = () => {
  const [state,dispatch]=useReducer(CounterReducer,{count:0})
  return (
    <div>
      <p>count: {state.count}</p>
      <div className='flex gap-10'>
      <button onClick={()=>dispatch({type:'Increment'})}>Increase</button>
      <button onClick={()=>dispatch({type:'Decrement'})}>Decrease</button>
      <button onClick={()=>dispatch({type:'Reset'})}>Reset</button>

      </div>
      
    </div>
  )
}

export default Counter