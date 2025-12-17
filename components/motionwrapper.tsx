"use client";
import {Easing, motion, RepeatType} from "framer-motion"
import { init } from "next/dist/compiled/webpack/webpack";
import React from "react";

type transition_typ={
    repeat?:number
    repeatType?:RepeatType
    ease?:Easing
    duration?:number
} 

type initial_typ={
    x?:number
    rotate?:number
}

type animation_typ={
   rotate?:number []
   x?: number []
}
export default function MotionWrapper({ 
    children ,
    transition_,
    initial_,
    animation_
    }: { 
    children: React.ReactNode,
    transition_?:transition_typ,
    initial_?:initial_typ,
    animation_?:animation_typ
}):React.ReactNode{
    return (
        <motion.div
        initial={{...initial_}}
        transition={{...transition_}}
        animate={{...animation_}}
        >
            {children}
        </motion.div>
    )
}