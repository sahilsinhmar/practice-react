import React from 'react'


const InputBox = ({label,type ,register,name,errors,placeholder}) => {
  
  return (
    <div className='max-w-full flex flex-col'>
      <label className='text-gray-500 text-lg'>{label}</label>
      <input className='border border-gray-300 rounded-lg  tracking-widest p-2 text-md text-gray-700 focus:outline-none focus:border-sky-500 focus:ring-sky-500' placeholder={placeholder}  type={type} {...register(name)} />
      {errors[name] && (<p className='text-red-500 text-sm'>{errors[name]?.message}</p>)}
    </div>
  )
} 

export default InputBox