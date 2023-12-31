'use client'
import axios from 'axios'
import React,{useEffect, useState} from 'react'

const LearninguseEffects = () => {
const[data,setData]=useState([] )

useEffect(()=>{
  const fetchData= async ()=>{
    try {
      const res=await axios.get('https://jsonplaceholder.typicode.com/todos')
      const result=res?.data
      
      setData(result)
      
      
    } catch (error) {
      console.log(error.message)
      
    }
  }

  fetchData()
  return () => {
    // Perform cleanup, if needed
    console.log('Cleanup: DataFetchingComponent is unmounted');
  };
  
},[])


  return (
    <div className='flex flex-col justify-center  gap-10 py-4 max-w-7xl border mx-auto'>
      <div className="text-3xl font-bold self-center">Use Effects</div>
      <div className=' font-semibold text-xl'>
        1. Fetching data :

        <div>
          {data.slice(0,10).map((item)=>(
            <div key={item.id}>
                {item.title}
            </div>
          ))}
          
        </div>
      </div>
      <div>
        2. Subscriptions

        <div>
          
        </div>
      </div>
    </div>
  )
}

export default LearninguseEffects