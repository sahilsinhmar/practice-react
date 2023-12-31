import React, { useState } from 'react'

const UpdatedComponent = (OriginalComponent) => {
 function NewComponent(){
  const [money,setMoney]=useState(0)
  const increseMoney=()=>{
    setMoney(money+20)
  }
  return <OriginalComponent money={money} increseMoney={increseMoney}/>
 }
 return NewComponent
}

export default UpdatedComponent;