"use client";
import Container from "./container"
import { Certificates_achievements as cf} from "@/data/aboutme";

import { getTechIcon as GetTechIcon} from "./getIcons";
import Link from "next/link";


export const achievments = () => {
    
  return (
    <Container classname="relative p-4 md:p-5 bg-neutral-100 rounded-xl dark:bg-gray-800">
      {cf.map((ele, idx) => (
        <div className="m-2 grid gap-2">
          <div className="flex m-1">
            <div>{ele.icon && <GetTechIcon techname={ele.icon} sz={25}/>}</div>
            <div className=" ml-2 font-medium underline">{ele.title}</div>
          </div>
          <div>
            {ele.description && <p>{ele.description}</p>}
          </div>
          <div>
            {ele.link && <Link href={ele.link} className="text-primary underline text-blue-500 dark:text-blue-400">Certificate</Link>}
          </div>
       </div>
      ))}
    </Container>
  )
}
