'use client'
import React,{useEffect, useRef} from 'react'

const Ref = () => {

  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <div>Ref

      <label>Enter your name</label>
      <input type='text' ref={inputRef}/>
    </div>
  )
}

export default Ref