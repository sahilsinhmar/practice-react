'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import { MYContext } from '@/lib/useContext'


const Hooks = () => {
  const contextValue=useContext(MYContext)
  
  return (
    <div className='flex flex-col justify-center  gap-10 py-4 max-w-7xl border mx-auto'>
      <div className="text-3xl font-bold self-center">Learning Hooks</div>
      <Link href='/hooks/useEffect' className='underline font-semibold text-xl'>
        1. useEffects by {contextValue}


      </Link>

      <Link href='/hooks/useReducer' className='underline font-semibold text-xl'>
        2. useReducer by {contextValue}


      </Link>
      <Link href='/hooks/useMemo' className='underline font-semibold text-xl'>
        3. useMemo by {contextValue}


      </Link>
      <Link href='/hooks/useCallback' className='underline font-semibold text-xl'>
       4 . useCallback by {contextValue}


      </Link>
      
      <Link href='/hooks/useRef' className='underline font-semibold text-xl'>
       5 . useRef by {contextValue}


      </Link>

      
      
      </div>
  )
}

export default Hooks