"use client";
import React, { useState } from 'react'
import Container from '@/components/container'
import { ChevronRight } from 'lucide-react';
import { FolderIcon } from 'lucide-react';
import {projectsData} from "@/data/project-data"
import {motion} from "framer-motion"
const page = () => {
    const [sidebarOpen,setSidebarOpen]=useState<boolean>(false)
    const [projectIdOpen,setProjectIdOpen]=useState<string>("-1")

  return (
    <div className='mx-auto w-full bg-white grid grid-cols border-gray-300 border-2 max-w-6xl h-[80vh] rounded-xl overflow-hidden'>
        {/* {header} */}
        <div className='flex h-[5vh]'>
            {/* {header.left} */}
            <div className={!sidebarOpen?`w-[3vw] border border-gray-300`:`w-1/3 border border-gray-300`}>
                <ChevronRight onClick={()=>{
                    setSidebarOpen((prev)=>!prev)
                }}/>
            </div>
            {/* {header.right} */}
            <div className='border border-gray-300 w-full'>
                cbiweucw
            </div>   
        </div>
        {/* {content-area} */}
        <div className='flex h-[75vh]'>
            {/* {left-sidebar} */}
            <div className={!sidebarOpen?`w-[3vw] border border-gray-300`:`w-1/3 border border-gray-300`}>
            {
                sidebarOpen?(
                    projectsData.map((prj,idx)=>{
                        return <motion.div 
                        whileHover={{ scale: 1.05, boxShadow:"shadow-md"}}
                        className='flex items-center' 
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        key={prj.id}>
                        <FolderIcon
                        className={`w-3.5 h-3.5 ${
                            projectIdOpen===prj.id? "text-blue-400" : "text-blue-300"
                        }`}
                        fill="currentColor
                        "/>
                        <span className='ml-2'>{prj.title}</span>
                        </motion.div>

                    })
                ):null
            }
            </div>
            {/* {right-area} */}
            <div className='border border-gray-300 w-full'>
                ijrfbr
            </div>
        </div>
    </div>
  )
}

export default page