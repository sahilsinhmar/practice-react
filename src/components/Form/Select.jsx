import React from 'react'

const Select = ({heading,options=[],register,name,selected},) => {
  
  return (
    <div className='w-full flex gap-2'>
      <p className='text-gray-700 text-lg'>{heading}</p>
      <select  {...register(name)} className='max-w-full border-gray-400 border outline-none rounded-md p-1 '>
      {options.map((option)=>(
        <option  key={option} value={option}>{option}</option>
      ))}
      </select>
      
    </div>
  )
}

export default Select