"use client";
import { div } from 'framer-motion/client'
import { title } from 'process'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

const projects = () => {
    const projects=[
        {
            title:"prj1",
            src:"/neymar.jpg",
            href:"#",
            description:"lorem dbhjf fsefgwufygb fbfifawrkwjw oifjoifweifewof fiufhweiufhweuf fwrefhfurefhi9f h8jfwuwewnn"
        },
        {
            title:"prj2",
            src:"/neymar.jpg",
            href:"#",
            description:"lorem dbhjf fsefgwufygb fbfifawrkwjw oifjoifweifewof fiufhweiufhweuf fwrefhfurefhi9f h8jfwuwewnn"
        },
        {
            title:"prj3",
            src:"/neymar.jpg",
            href:"#",
            description:"lorem dbhjf fsefgwufygb fbfifawrkwjw oifjoifweifewof fiufhweiufhweuf fwrefhfurefhi9f h8jfwuwewnn"
        },
    ]
  return (
    <div className='py-10'>
        <p className='text-secondary max-w-lg text-sm pt-4 md:text-sm'>
            I love building webappps
        </p>
        <div className='py-4 grid grid-cols-1 gap-10 md:grid-cols-2'>
            {
            projects.map((prj,idx)=>{
                return <motion.div 
                key={prj.title}
                initial={{opacity:0,filter:'blur(10px)',y:10}}
                whileInView={{opacity:1,filter:'blur(0px)',y:0}}
                transition={{
                    duration:0.3,
                    delay:idx*0.1,
                    ease:"easeInOut"
                }}
                className='group'
                >
                    <Image 
                    src={prj.src} 
                    height={300} 
                    width={300} 
                    alt={prj.title}
                    className='w-full h-74 rounded-xl object-cover transition duration:200 group-hover:scale-[1.02]'/>
                    <h2 className='font-medium tracking-tight text-neutral-500 mt-2'>{prj.title}</h2>
                    <p className='max-w-xs mt-2 text-sm text-neutral-500'>
                        {prj.description}
                    </p>
                </motion.div>
            })
        }
        </div>
        
    </div>
  )
}
export default projects