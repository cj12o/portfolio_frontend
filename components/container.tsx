import React from 'react'

const container = ({children,classname=""}:{
    children:React.ReactNode,
    classname?: string
}) => {
  return (
    <div className={`mx-auto w-full max-w-4xl bg-white md:p-10 ${classname}`}>
        {children}
    </div>
  )
}

export default container