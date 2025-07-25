import React from 'react'

const ScreenWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full h-screen py-4 px-4 overflow-hidden'>{children}</div>
  )
}

export default ScreenWrapper