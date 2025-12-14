import React from 'react'
import {projectsData} from "@/data/project-data"

const introduction = ({project_id}:{project_id:string}) => {
    const prj=projectsData[Number(project_id)]
   return (
    <div>
        <h1>{prj.title}</h1>
        <p>{prj.description}</p>
    </div>
  )
}

export default introduction