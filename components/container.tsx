import React from 'react'
import {cn} from "@/lib/utils";
const container = ({children,classname=""}:{
    children:React.ReactNode,
    classname?: string
}) => {
  return (
    <div className={cn("relative mx-auto w-full max-w-4xl bg-white dark:bg-black md:p-10",classname)}>
      {children}   
    </div>

  )
}

export default container