import React from 'react'
import {projectsData} from "@/data/project-data"

const challenges = ({project_id}:{project_id:string}) => {
    const prj=projectsData[Number(project_id)]
    return (
        <div>
            <h1>{prj.title}</h1>
            <div>
                {
                    prj.challenges.map((chl,idx)=>{
                        return <div>
                        <h3>{chl.title}</h3>
                        <p>{chl.description}</p>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default challenges