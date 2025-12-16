"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects as projects_data } from "@/data";
import { useState } from "react";
import { Subheading } from "./subheading";
import { Section } from "lucide-react";
import { Sectionheading } from "./sectionheading";
const projects = () => {
  const [selected, setSelected] = useState<string | null>(null);
  
  return (
    <div className="py-10">
      <Sectionheading delay={0.01}>
          I love building systems that can scale and deliver value to users.
      </Sectionheading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 ">
        {
          projects_data.slice(0,3).map((prj,idx)=>(
            <motion.div
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}

              transition={{
                duration:0.3,
                delay:idx*0.1,
                damping:40,
                stiffness:20,

              }}
              whileHover={{scale:1.05}}
              key={prj.title}
              className="group relative mb-4"
              onHoverStart={()=>setSelected(prj.title)} 
              onHoverEnd={()=>setSelected(null)}
            >
              <Image src={prj.image} 
                alt={prj.title} 
                width={300}  
                height={200}
                className={`rounded-xl object-cover h-54 ${!selected || (selected && selected===prj.title)?'':'blur-[3px]'}`}
              />
              <h2 className="mt-2 font-medium tracking-tight text-neutral-600 absolute z-20 dark:text-white">
                {prj.title}
              </h2>
              <p className="mt-10 text-sm text-secondary max-w-sm">
                {prj.description}
              </p>
              </motion.div>
          ))
        }
      </div>
    </div>
  );
};
export default projects;
