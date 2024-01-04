import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-full flex flex-col items-center justify-center  h-screen bg-gradient-to-t from-indigo-400 via-purple-500 to-pink-100'>
      {children}
    </div>
  )
}

export default Layout