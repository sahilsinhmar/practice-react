'use client'
import React, { useCallback, useState } from 'react'


const CallbackParent = () => {
  const [count,setCount]=useState(0)

  const handleClick=useCallback(()=>{
    setCount(count+1)
  },[count])

  return (
    <div>Callback

      <div>
      Parent component
      {count}
      <Child handleClick={handleClick}/>

    
      </div>
    </div>
  )
}

const Child=({handleClick})=>{
  return(
    <div>Child
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}




export default CallbackParent

