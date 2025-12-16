"use client";
import Container from "@/components/container";
import {Timeline} from '@/components/timeline'
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import Image from "next/image";
import { SiReact,SiStreamlit,SiNextdotjs,
SiFastapi,SiDjango,SiLangchain,
SiFlask,SiGit,SiDocker
} from "react-icons/si";

import {motion} from "framer-motion"

export default function About() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container classname="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>
          About Me
        </Heading>
        <Subheading>
          I'm a passionate software engineer who loves turning ideas into
          reality through code. With a strong foundation in full-stack
          development, I focus on creating efficient, scalable solutions that
          make a real impact.
        </Subheading>
        <p className="text-secondary text-sm md:text-base pt-4 max-w-2xl leading-relaxed">
          Here's my Education Timeline
          <div>
            <Timeline/>
          </div>
        </p>
        <div className="relative mx-auto mt-16 w-[520px] h-[520px] rounded-2xl overflow-hidden bg rounded-full">
          
          {/* BACKGROUND MAP */}
          <Image
            src="/assets/map.png"
            alt="Map"
            fill
            className="object-cover scale-110"
            priority
          />

          {/* GRADIENT FOG OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-transparent z-[1]" />

          {/* SVG REGIONS */}
          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 z-10"
          >
            <defs>
              {/* SOFT GLOW */}
              <radialGradient id="glow">
                <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                <stop offset="60%" stopColor="white" stopOpacity="0.4" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* FRONTEND */}
            <motion.path
              d="M50 70 C150 20, 260 90, 210 190 C160 260, 60 210, 50 120 Z"
              fill="url(#glow)"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            />

            {/* BACKEND */}
            <motion.path
              d="M280 70 C390 40, 460 140, 400 230 C330 290, 260 220, 260 150 Z"
              fill="url(#glow)"
              whileHover={{ scale: 1.05 }}
            />

            {/* DEVOPS */}
            <motion.path
              d="M70 290 C160 250, 270 330, 230 430 C120 470, 40 360, 70 290 Z"
              fill="url(#glow)"
              whileHover={{ scale: 1.05 }}
            />

            {/* GEN AI */}
            <motion.path
              d="M300 300 C390 270, 460 330, 430 420 C360 470, 290 400, 300 330 Z"
              fill="url(#glow)"
              whileHover={{ scale: 1.05 }}
            />
          </svg>

          {/* ICONS & LABELS */}
          {/* FRONTEND */}
          <div className="absolute left-[120px] top-[140px] z-20 text-center">
            <p className="text-xs font-semibold mb-2">Frontend Nagar</p>
            <div className="flex gap-2 text-xl">
              <SiReact  size={40} />
              <SiNextdotjs  size={40} />
              <SiStreamlit  size={40} />
            </div>
          </div>

          {/* BACKEND */}
          <div className="absolute right-[90px] top-[140px] z-20 text-center">
            <p className="text-xs font-semibold mb-2">Backend Nagar</p>
            <div className="flex gap-2 text-xl">
              <SiFastapi  size={40}  />
              <SiDjango  size={40} />
              <SiFlask  size={40} />
            </div>
          </div>

          {/* DEVOPS */}
          <div className="absolute left-[130px] bottom-[110px] z-20 text-center">
            <p className="text-xs font-semibold mb-2">DevOps Area</p>
            <div className="flex gap-2 text-xl">
              <SiGit  size={40} />
              <SiDocker  size={40} />
            </div>
          </div>

          {/* GEN AI */}
          <div className="absolute right-[110px] bottom-[120px] z-20 text-center">
            <p className="text-xs font-semibold mb-2">GenAI Zone</p>
            <div className="flex gap-2 text-xl">
              <SiLangchain size={40} />
            </div>
          </div>
        </div>
    </Container>
    </div>
  );
}
