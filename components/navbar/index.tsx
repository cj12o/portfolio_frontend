"use client";
import Container from '@/components/container'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";


const index = () => {
  const items=[
    {
      name:"About",
      href:"/about"      
    },
    {
      name:"Projects",
      href:"/projects"
    },
    {
      name:"Contact",
      href:"/contact"
    }
  ]
  const [hover,setHover]=useState<number|null>(-1);
  return (
    <Container>
        <nav className='flex items-center justify-between'>
          <Image className="h-10 w-10 rounded-full" src="/neymar.jpg" height={100} width={100} alt="neymar"/>
          <div className='flex items-center gap-3'>
            {
            items.map((item,idx)=>{
              return <Link 
              className="relative text-sm px-2 py-1"
              onMouseEnter={()=>setHover(idx)}
              onMouseLeave={()=>setHover(-1)}
              href={item.href} key={idx}>
                {
                  hover==idx?<motion.span layoutId="hovered-span" className='h-full w-full absolute inset-0 rounded-md bg-neutral-300'/>:null
                }
                <span className='relative z-10'>{item.name}</span>
              </Link>
            })
          }
          </div>
        </nav>
    </Container>
  )
}

export default index