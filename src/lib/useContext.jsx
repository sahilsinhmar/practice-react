'use client'
import React, { createContext } from 'react'

export const MYContext=createContext()

export default function ContextProvider({children}){
  return(
    <MYContext.Provider value="sahil">
    {children}
    </MYContext.Provider>
  )
}