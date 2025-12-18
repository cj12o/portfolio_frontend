import React from 'react'
import { project_details } from "@/data/project-data";

import { SiGithub,SiLinkedin} from 'react-icons/si';
import Link from 'next/link';
import { Subheading } from '../subheading';

const GetIcons=({name}:{name:string}):React.ReactNode|null=>{
  const size=30
  switch(name.toLocaleLowerCase()){
    case "linkedin":
      return <SiLinkedin size={size} color="#0D597F" />
    case "github":
      return <SiGithub  size={size} className="text-#181717 dark:text-white"/>
    default:
      return null
  }  
}

const details = ({ project_id }: { project_id: string }) => {
  const prj = project_details[Number(project_id) - 1];

  if (!prj) return null;
  return (
    <section className="h-full w-full mx-auto px-2 py-2 bg-white/75 overflow-y-scroll">
      {/* Title */}
        <h1 className="text-3xl font-medium bg-clip-text underline dark:text-black mt-10 ml-3">
        {prj.title}
        </h1>

        <h2 className='dark:text-black font-medium text-lg p-4 max-w-xl'>
          For deeper insights, including architectural diagrams, documentation, and detailed explanations, visit my GitHub repository — and feel free to star 🌟 it if you find it useful.
        </h2>
    
        <div className='mt-5 p-3'>
          <Link href={prj.Github} className='flex'>
            <GetIcons name="github"/>
            <p className='ml-2 dark:text-black'>Github Repo</p>
          </Link>
        </div>

        <h2 className='dark:text-black font-medium text-lg p-4 max-w-xl'>
          I also share progress, demos, and learnings on LinkedIn — feel free to connect if this interests you.
        </h2>

        <div className='mt-5 p-3'>
          <Link href={prj.Linkedin} className='flex'>
            <GetIcons name="LinkedIn"/>
            <p className='ml-2 dark:text-black'>LinkedIn Post</p>
          </Link>
        </div>
    </section>
  );
}


export default details