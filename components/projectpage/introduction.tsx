import React from 'react'
import {projectsData} from "@/data/project-data"

const introduction = ({project_id}:{project_id:string}) => {
    const prj=projectsData[Number(project_id)]
   return (
    <div>
        <h1>{prj.title}</h1>
        <p>{prj.description}</p>
        <video
          src={prj.videoUrl}
          controls
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
    </div>
  )
}

export default introduction