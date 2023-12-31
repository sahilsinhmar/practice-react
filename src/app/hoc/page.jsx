'use client'
import React from 'react'
import UpdatedComponent from '@/components/HOC/hoc'

 const Person1 = ({money, increseMoney}) => {
  return (
    <div>Person1
      <p>Money: {money}</p>
      <button onClick={increseMoney}>Increase the money</button>
    </div>
  )
}


export default UpdatedComponent(Person1)

