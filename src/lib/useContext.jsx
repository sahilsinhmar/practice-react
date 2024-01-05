'use client'
import React, { createContext } from 'react'

export const MYContext=createContext()

export default function ContextProvider({children}){
  return(
    <MYContext.Provider value="React js Learning">
    {children}
    </MYContext.Provider>
  )
}