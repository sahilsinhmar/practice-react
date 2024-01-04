'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputBox from '@/components/Form/InputBox'
import Select from '@/components/Form/Select'
import RadioButton from '@/components/Form/RadioButton'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'


const user=z.object({
  Name:z.string().min(1,{message:'Name is required'}).max(10,{message:`Name can't be longer than 10`}),
  skills: z.array(z.string()).min(1, {
    message: 'At least one skill must be selected',
  }),
  legal:z.string(z.enum('Yes','No')).min(1,{message:'Please choose 1'}),
  email:z.string().min(1,{message:'Please enter email'}).email({message:"Please enter a valid email"})

})


const Form = () => {
 const {register,handleSubmit,formState:{errors,isSubmitting,isSubmitted},reset,clearErrors}=useForm({
  defaultValues:{
    Name:'',
    gender:'Male',
    legal:'No',
    skills:[],
    education:''
  }, resolver:zodResolver(user)
 })

 

 
 
const onSubmit=async(data)=>{
  console.log(data)
  reset()
  clearErrors()
}


  return(
    <div className='flex flex-col gap-4 w-full items-center justify-center   '>
      <div className='text-4xl tracking-wider font-semibold'>Sign Up Form </div>
      <form className='max-w-full bg-slate-100 border-2 border-slate-300 rounded-xl shadow-2xl p-12 flex flex-col gap-4 ' onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputBox type='text' label='Name :' register={register} name='Name' errors={errors} placeholder='John smith' />
        <InputBox type='email' label='Email :' register={register} name='email' errors={errors} placeholder='johnsmit@example.com' />
       <Select heading="Gender" options={['Male','Female','Others']} register={register} name='gender' selected='Female' errors={errors} />
       <RadioButton type='radio' heading='Are you above 18?' register={register} name='legal' options={['Yes','No']} errors={errors}/>
       <RadioButton type='checkbox' heading="Skills :" register={register} name="skills" options={['React','Javascript','CSS']} errors={errors}/>
      
      
       <button className="max-w-full border hover:bg-sky-500 px-4 rounded-3xl text-xl  bg-sky-700 tracking-wider font-semibold text-slate-200 py-2" type='submit' disabled={isSubmitting}>{isSubmitting ? 'Loading...' : 'Submit'}</button>
       {isSubmitting}

        
      </form>

    </div>
    
  )
}

export const Form2=({register,errors,label, name,type})=>{
  return(<div>
    <div>
      <InputBox register={register} type="text" name="education" label="Education" errors={errors}/>
    </div>
  </div>)
}

export default Form