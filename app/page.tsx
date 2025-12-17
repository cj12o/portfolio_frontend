import Container from "@/components/container";
import Projects from "@/components/projects";
import ProjectComponent from "@/components/projects";
import { Landingblogs } from "@/components/landingblogs";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import {  } from "react-icons/si";
import MotionWrapper from "@/components/motionwrapper";

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start dark:bg-bgdark">
      <Container classname="min-h-screen md:pt-20 md:pb-10">
        <div className="flex group ">
          <Heading>
            Hi I'm Chitransh Jain
          </Heading>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ">
            <MotionWrapper 
            transition_={{
              duration:1,
              repeat:Infinity,
              repeatType:"reverse"
            }}
            animation_={{
              rotate:[-10,10,-10,10,5],
              x: [-10,10,-10,10, 0 ],
            }}
            initial_={{
              x:10,
              rotate:-10
            }}
            >

              <h1 className="text-3xl ">👋</h1>  
            </MotionWrapper>
          </div>
        </div>
        <Subheading>
          I use code as a medium to explore ideas — sometimes elegant, sometimes imperfect, but always intentional.    
        </Subheading>
        <ProjectComponent/>
        {/* <Landingblogs/> */}
      </Container>
    </div>
  );
}
