import React from 'react'

const RadioButton = ({heading,options=[],register,name,type,errors}) => {
  return (
    <>
    <div className='max-w-full sm:flex-row flex flex-col items-start gap-4'>
      <p className='text-gray-700 text-lg'>{heading}</p>
      {options.map((option)=>(
        <div key={option} className='max-w-full flex items-center gap-1'>
          <label className='w-full text-gray-500 text-lg'>{option}</label>
          <input className=' checked:bg-sky-400 w-4 h-4' type={type} value={option} {...register(name)}  />
        </div>
        
      ))}
      
    </div>
    {errors[name] && (<p className='text-red-500 text-sm'>{errors[name]?.message}</p>)}
    
    </>

  )
}

export default RadioButton