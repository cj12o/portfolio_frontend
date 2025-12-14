// project-intro ->desc,vid,techstack,
// githu-history
// core-chalenges 

"use client";
import React, { useState } from 'react'
import Container from '@/components/container'
import { ChevronRight } from 'lucide-react';
import { FolderIcon } from 'lucide-react';
import {projectsData,filetree} from "@/data/project-data"
import {motion} from "framer-motion"

import Challenges from '@/components/projectpage/challenges';
import Intro from '@/components/projectpage/introduction';
import { X } from 'lucide-react';



type Tabtyp={
    project_id:string;
    file_name:string;
    openedCurrently:boolean;
    tab_id?:string;
}

const page = () => {
    const [sidebarOpen,setSidebarOpen]=useState<boolean>(false)
    const [projectIdOpen,setProjectIdOpen]=useState<string>("-1")

    const [introSelected,setIntroSelected]=useState<boolean>(false)
    const [challengeSelected,setChallengeSelected]=useState<boolean>(false)

    const [openTabs,setOpenTabs]=useState<Tabtyp []>([])

    const setTabInFocus=(tab_id:string)=>{
        const tab=openTabs.find(tab=>tab.tab_id==tab_id)
        if(tab && tab.file_name){
            if(tab.file_name==="Intro.md"){
                setIntroSelected(true)
                setChallengeSelected(false)
            }
            else if(tab.file_name==="Challenges.tsx"){
                setChallengeSelected(true)
                setIntroSelected(false)
            }
        }
    }

    const tabCloser=(tab_id:string)=>{
        setOpenTabs((prev)=>prev.filter(tab=>tab.tab_id!=tab_id))
        const tab=openTabs.find(tab=>tab.tab_id==tab_id)
        if(tab && tab.file_name){
            if(tab.file_name==="Intro.md"){
                setIntroSelected(false)
            }
            else if(tab.file_name==="Challenges.tsx"){
                setChallengeSelected(false)
            }
        }
    }


    const tabHandler=(file_name:string,project_id:string)=>{
        const tab_id=file_name+project_id
        if(file_name=="Intro.md"){
            setIntroSelected((prev)=>!prev)
            setOpenTabs((prev)=>{
                const exists = prev.some(tab => tab.tab_id === tab_id)
                if(exists) return prev
                return [...prev,{file_name:file_name,project_id:project_id,openedCurrently:true,tab_id:tab_id}]
            })
        }
        else  if(file_name=="Challenges.tsx"){
            setChallengeSelected((prev)=>!prev)
            setOpenTabs((prev)=>{
                const exists=prev.some(tab=>tab.tab_id===tab_id)
                if(exists) return prev
                return [...prev,{file_name:file_name,project_id:project_id,openedCurrently:true,tab_id:tab_id}]
            })
        }
        else {
            setChallengeSelected(false)
            setIntroSelected(false)
        }
    }   

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
            {/* {tabs} */}
            <div className="flex border border-gray-300 w-full overflow-hidden">
        {openTabs.map((tab) => (
            <div
            key={tab.tab_id}
            className="
                flex flex-1 items-center justify-between
                min-w-[120px] max-w-[220px]
                px-3 py-1
                border-r cursor-pointer text-sm
            "
            onClick={()=>{
                setTabInFocus(String(tab.tab_id))
            }}
            >
            {/* file name */}
            <span className="truncate">
                {tab.file_name}
            </span>

            {/* close button */}
            <span
                onClick={() => tabCloser(String(tab.tab_id))}
                className="ml-2 flex-shrink-0 cursor-pointer opacity-60 hover:opacity-100"
            >
                ×
            </span>
            </div>
        ))}
        </div>

            
        </div>
        {/* {content-area} */}
        <div className='flex h-[75vh]'>
            {/* {left-sidebar} */}
            <motion.div className={!sidebarOpen?`w-[3vw] border border-gray-300`:`w-1/3 border border-gray-300`}>
            {
                sidebarOpen?(
                    projectsData.map((prj,idx)=>{
                        return <div key={idx} className='grid grid cols'>
                            <motion.div 
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
                            <span className='ml-2 hover:text-blue-400' 
                            onClick={()=>{
                                projectIdOpen===prj.id?setProjectIdOpen("-1"):setProjectIdOpen(prj.id)
                            }}
                            >
                                {prj.title}
                            </span>
                            </motion.div>
                        
                            <div className='grid grid-cols p-3 ml-4'>
                                {
                                    projectIdOpen===prj.id && filetree.map((fl,idx)=>{
                                        return <div className='hover:underline'
                                        onClick={()=>{
                                            tabHandler(fl,prj.id)
                                        }}>
                                            {fl}
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        

                    })
                ):null
            }
            </motion.div>
            {/* {right-area} */}
            <div className='border border-gray-300 w-full'>
                {
                    projectIdOpen!="-1" && introSelected?(
                        <Intro project_id={projectIdOpen}/>
                    ):null
                }
                {
                    projectIdOpen!="-1" && challengeSelected?(
                        <Challenges project_id={projectIdOpen}/>
                    ):null
                }
            </div>
        </div>
    </div>
  )
}

export default page