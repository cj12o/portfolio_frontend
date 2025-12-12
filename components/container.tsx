import React from 'react'

const container = ({children,classname=""}:{
    children:React.ReactNode,
    classname?: string
}) => {
  return (
    <div className={`max-w-4xl mx-auto bg-white p-10 ${classname}`}>
        {children}
    </div>
  )
}

export default container