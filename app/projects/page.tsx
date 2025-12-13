"use client";
import Container from "@/components/container";
import { div } from "framer-motion/client";
import { FolderIcon,FileIcon } from "lucide-react";

const projects_items=[
  {
    name:"prj1"
  },
  {
    name:"prj2"
  }
]

const prj1_detail={
  title:"Agentic Chatrooms ",
  description:"Education is the cornerstone of personal and societal development. It empowers individuals with knowledge, critical thinking skills, and the ability to make amplified the role of education, making lifelong learning essential to adapt to rapid changes. Moreover, education supports innovation and critical analysis, which are vital for solving complex global challenges such as climate change, poverty, and public health crises. Investing in quality education goes beyond individual growth—it strengthens society and sustains economic development. Therefore, governments, communities, and individuals must recognize and prioritize education as a fundamental human right and a driving force for progress in the 21st century.",
  challenges_sol:[{
    challenge:"Education is the cornerstone of personal and societal development. It empowers individuals with knowledge.",
    solution:"Education is the cornerstone of personal and societal development. It empowers individuals with knowledge."
  },
  {
    challenge:"Education is the cornerstone of personal and societal development. It empowers individuals with knowledge.",
    solution:"Education is the cornerstone of personal and societal development. It empowers individuals with knowledge."
  }]
}


export default function Projects() {

  return (
    <Container classname="flex border-2 border-black">
      <div className="w-1/4 h-full bg-red-500 p-3">
        <div className="grid grid-cols" key="left-div">
          EXPLORER
          {
            projects_items.map((prj,idx)=>{
              return <div className="flex p-2">
                <FolderIcon key={prj.name}/>
                <h2 className="ml-3">{prj.name}</h2>
              </div>
            })
          }
        </div>
      </div>
      <div className="w-3/4 h-full bg-green-500 p-2" key="right-div">
        <h1 className="p-2 font-bold text-4xl text-primary">{prj1_detail.title}</h1>
        <p>{prj1_detail.description}</p>
      </div>
    </Container>
  );
}
