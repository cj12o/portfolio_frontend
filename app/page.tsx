"use client";
import Container from "@/components/container";
import Projects from "@/components/projects";
import ProjectComponent from "@/components/projects";
import { Landingblogs } from "@/components/landingblogs";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import MotionWrapper from "@/components/motionwrapper";
import { LocationEdit } from "lucide-react";
import { motion } from "framer-motion";

export function TypingText({
  text,
  delay = 0,
  speed = 0.04,
  className = "",
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}) {
  const letters = text.split("");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: speed,
          },
        },
      }}
      className={className}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start dark:bg-bgdark">
      <Container classname="realtive min-h-screen md:pt-20 md:pb-10">
        <div className="flex group ">
          <Heading>
            Hi I'm Chitransh Jain
          </Heading>
          
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-1/3">
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
          <span className="flex text-sm text-muted-foreground whitespace-nowrap font-semibold mt-2">
            <LocationEdit/>
            <TypingText text="Jaipur, Rajasthan, India"></TypingText>
          </span>   
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
