"use client";
import React from 'react'
import {motion} from "framer-motion"
import { cn } from '@/lib/utils';

export const Sectionheading = ({
    children,
    delay=0,
    className
}: {
    children:string,
    delay:number,
    className?:string
}) => {
  return (
    <h2 className={cn('max-w-lg pt-4 text-sm font-normal md:text-sm',className)}>
        {children.split(" ").map((word,idx)=>(
            <motion.span 
            initial={{opacity:0,filter:"blur(2px)",y:5}}
            whileInView={{opacity:1,filter:"blur(0px)",y:0}}
            transition={{
                delay:delay+idx*0.05,
                duration:0.15,
                ease:"easeInOut"
            }}
            key={idx}
            viewport={{once:true}}
            className="inline-block">
                {word}&nbsp;
            </motion.span>
        ))}
    </h2>
  )
}
