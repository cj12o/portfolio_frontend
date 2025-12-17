"use client";
import React, { useState } from "react";
import Container from "@/components/container";
import { Timeline } from "@/components/timeline";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import Image from "next/image";
import {
  SiReact,
  SiStreamlit,
  SiNextdotjs,
  SiFastapi,
  SiDjango,
  SiLangchain,
  SiGit,
  SiDocker,
  SiPython,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiScikitlearn,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const regionData = {
  frontend: {
    title: "Frontend",
    desc: "Crafting pixel-perfect, responsive user interfaces. The land of visual storytelling.",
    level: 3,
    color: "text-blue-400",
  },
  backend: {
    title: "Backend",
    desc: "I can architect robust logic and scalable APIs.",
    level: 3,
    color: "text-green-400",
  },
  devops: {
    title: "DevOps Area",
    desc: "Working with Git workflows and Docker containerization as part of development.",
    level: 1,
    color: "text-orange-400",
  },
  genai: {
    title: "GenAI Zone",
    desc: "Building GenAI features using prompt engineering, retrieval-augmented generation (RAG), and basic agent workflows.",
    level: 3,
    color: "text-purple-400",
  },
};

export default function About() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex items-start justify-start dark:bg-bgdark">
      <Container classname="min-h-screen px-10 md:pt-20 md:pb-10 ">
        <Heading>About Me</Heading>
        <Subheading>
          I'm a passionate software engineer who loves turning ideas into
          reality through code. With a strong foundation in full-stack
          development, I focus on creating efficient, scalable solutions that
          make a real impact.
        </Subheading>
        <p className="text-secondary text-sm md:text-base pt-4 max-w-2xl leading-relaxed"></p>
        Here's my Education Timeline
        <div>
          <Timeline />
        </div>
      

        {/* INTERACTIVE MAP CONTAINER */}
        <div className="relative mx-auto mt-16 w-[620px] h-[620px] overflow-hidden bg-white shadow-2xl border border-slate-200
        dark:var(--shadow-s2)  var(--shadow-s1) rounded-xl
        ">
          {/* BACKGROUND MAP */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: activeRegion ? 1.05 : 1.1 }}
            transition={{ duration: 0.8 }}

          >
            <Image
              src="/assets/map1.png"
              alt="Map"
              fill
              className="object-cover opacity-60 grayscale-[10%]"
              priority
            />

            {/* RADAR SCAN EFFECT */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white via-black/10 to-transparent z-[5] pointer-events-none"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3,ease: "easeInOut" }}
              viewport={{once:true}}
            />
          </motion.div>

          {/* GRID OVERLAY */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-900/20 to-slate-900/80 pointer-events-none" />

          {/* SVG REGIONS */}
          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 z-10 w-full h-full"
          >
            <defs>
              <filter id="glow-filter">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* FRONTEND - The Jagged Coast */}
            <motion.path
              d="M40 80 L60 65 L90 75 L120 40 L160 50 L200 80 L230 140 L210 180 L180 210 L140 230 L100 220 L60 190 L40 140 Z"
              fill="transparent"
              className="cursor-pointer"
              onHoverStart={() => setActiveRegion("frontend")}
              onHoverEnd={() => setActiveRegion(null)}
              whileHover={{ scale: 1.02 }}
            />

            {/* BACKEND - The Iron Mountains */}
            <motion.path
              d="M280 80 L320 50 L360 70 L420 50 L460 100 L450 160 L420 200 L360 220 L300 200 L270 150 L280 110 Z"
              fill="transparent"
              className="cursor-pointer"
              onHoverStart={() => setActiveRegion("backend")}
              onHoverEnd={() => setActiveRegion(null)}
              whileHover={{ scale: 1.02 }}
            />
            {/* {languages} */}

            <motion.path
              d="M280 80 L320 50 L360 70 L420 50 L460 100 L450 160 L420 200 L360 220 L300 200 L270 150 L280 110 Z"
              fill="transparent"
              className="cursor-pointer"
              onHoverStart={() => setActiveRegion("backend")}
              onHoverEnd={() => setActiveRegion(null)}
              whileHover={{ scale: 1.02 }}
            />

            {/* DEVOPS - The Southern Isles */}
            <motion.path
              d="M60 240 L110 210 L160 220 L200 250 L230 320 L200 380 L140 400 L80 370 L50 320 L60 280 Z"
              fill="transparent"
              className="cursor-pointer"
              onHoverStart={() => setActiveRegion("devops")}
              onHoverEnd={() => setActiveRegion(null)}
              whileHover={{ scale: 1.02 }}
            />

            {/* GEN AI - The Mystic Peninsula */}
            <motion.path
              d="M300 260 L350 230 L400 250 L440 290 L450 350 L400 390 L340 380 L290 340 L280 290 Z"
              fill="transparent"
              className="cursor-pointer"
              onHoverStart={() => setActiveRegion("genai")}
              onHoverEnd={() => setActiveRegion(null)}
              whileHover={{ scale: 1.02 }}
            />
          </svg>

          {/* ICONS & LABELS - Interactive Layer */}
          <div className="absolute right-[100px] top-[250px] z-20 text-center w-[160px] pointer-events-none">
            <p className="text-primary font-bold">TECHSTACK</p>
          </div>
          {/* FRONTEND */}
          
          <motion.div
            className="absolute left-[20px] top-[20px] z-20 text-center w-[160px] pointer-events-none"
            animate={{
              scale: activeRegion === "frontend" ? 1.05 : 1,
            }}
          >
            <div className="bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-500/50 mb-4 inline-block shadow-lg">
              <p className="text-[10px] font-bold text-blue-100 tracking-widest uppercase">
                Frontend Nagar
              </p>
            </div>
            <div
              className="flex gap-6 justify-center flex-wrap p-4 grid grid-cols-3"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,255,255,0.6) 0%, transparent 100%)",
              }}
            >
              <div className="mr-1 ml-1">
                <SiReact size={36} className="text-[#61DAFB]" />
                <p className="text-xs text-secondary">React</p>
              </div>
              <div className="mr-1 ml-1">
                <SiNextdotjs size={36} className="text-black" /> 
                <p className="text-xs text-secondary">Next.js</p>
              </div>
              <div className="mr-1 ml-1">
                <SiStreamlit size={36} className="text-red-500" />
                <p className="text-xs text-secondary">Streamlit</p>
              </div>
              <div className="mr-1 ml-1">
                <SiHtml5 size={36} className="text-[#FF4B4B]" />
                <p className="text-xs text-secondary">HTML</p>
              </div>
              <div className="mr-1 ml-1">
                <SiTailwindcss size={36} color="#06B6D4" />
                <p className="text-xs text-secondary">TailwindCSS</p>
              </div>
            </div>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            className="absolute right-[20px] top-[100px] z-20 text-center w-[160px] pointer-events-none"
            animate={{
              scale: activeRegion === "backend" ? 1.05 : 1,
            }}
          >
            <div className="bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-green-500/50 mb-4 inline-block shadow-lg">
              <p className="text-[10px] font-bold tracking-widest text-green-100 uppercase ">
                Backend ranges
              </p>
            </div>
            <div
              className="flex gap-6 justify-center flex-wrap p-4"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,255,255,0.6) 0%, transparent 100%)",
              }}
            >
              <div className="mr-1 ml-1">
                <SiFastapi size={36} className="text-[#009688]" />
                <p className="text-xs text-secondary">FastAPI</p>
              </div>
              <div className="mr-1 ml-1">
                <SiDjango size={36} className="text-[#44B78B]" />
                <p className="text-xs text-secondary">Django</p>
              </div>
            </div>
          </motion.div>

          {/* lang */}
          <motion.div
            className="absolute left-[10px] top-[250px] z-20 text-center w-[160px] pointer-events-none"
            animate={{
              scale: activeRegion === "backend" ? 1.05 : 1,
            }}
          >
            <div className="bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-green-500/50 mb-4 inline-block shadow-lg">
              <p className="text-[10px] font-bold text-green-100 tracking-widest uppercase">
                Languages 
              </p>
            </div>
            <div
              className="grid grid-cols-2 flex gap-6 justify-center flex-wrap p-4"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,255,255,0.6) 0%, transparent 100%)",
              }}
            >
              <div className="mr-1 ml-1">
                <SiPython size={36} color="#3776AB" />
                <p className="text-xs text-secondary">Python</p>
              </div>
              <div className="mr-1 ml-1">
                <SiJavascript size={36} color="#F7DF1E" />
                <p className="text-xs text-secondary">JavaScript</p>
              </div>
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            className="absolute left-[240px] top-0 z-20 text-center w-[160px] pointer-events-none"
            animate={{
              scale: activeRegion === "backend" ? 1.05 : 1,
            }}
          >
            <div className="bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-green-500/50 mb-4 inline-block shadow-lg">
              <p className="text-[10px] font-bold text-green-100 tracking-widest uppercase">
                Databases
              </p>
            </div>
            <div
              className="flex gap-6 justify-center flex-wrap p-4 grid grid-cols-2"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,255,255,0.6) 0%, transparent 100%)",
              }}
            >
              <div className="mr-1 ml-1">
                <SiPostgresql size={36} color="#4169E1" />
                <p className="text-xs text-secondary">PostgreSql</p>
              </div>
              <div className="mr-1 ml-1">
                <SiMongodb size={36} color="#1dc550ff" />
                <p className="text-xs text-secondary">MongoDB</p>
              </div>
            </div>
          </motion.div>

          {/* DEVOPS */}
          <motion.div
            className="absolute left-[170px] bottom-[140px] z-20 text-center w-[160px] pointer-events-none"
            animate={{
              scale: activeRegion === "devops" ? 1.05 : 1,
            }}
          >
            <div className="bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-500/50 mb-4 inline-block shadow-lg">
              <p className="text-[10px] font-bold text-orange-100 tracking-widest uppercase">
                DevOps Area
              </p>
            </div>
            <div
              className="flex gap-6 justify-center flex-wrap p-4"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,255,255,0.6) 0%, transparent 100%)",
              }}
            >
              <div className="mr-1 ml-1">
                <SiGit size={36} className="text-[#F05032]" />
                <p className="text-xs text-secondary">Git</p>
              </div>
              <div className="mr-1 ml-1">
                <SiDocker size={36} className="text-[#2496ED]" />
                <p className="text-xs text-secondary">Docker</p>
              </div>
            </div>
          </motion.div>

          {/* GEN AI */}
          <motion.div
            className="absolute right-[40px] bottom-[140px] z-20 text-center w-[120px] pointer-events-none"
            animate={{
              scale: activeRegion === "genai" ? 1.05 : 1,
            }}
          >
            <div className="bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/50 mb-4 inline-block shadow-lg">
              <p className="text-[10px] font-bold text-purple-100 tracking-widest uppercase">
                GenAI Zone
              </p>
            </div>
            <div
              className="flex gap-6 justify-center flex-wrap p-4 grid grid-cols-2"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,255,255,0.6) 0%, transparent 100%)",
              }}
            >
              <div className="mr-1 ml-1">
                <SiLangchain size={36} color="#1C3C3C" />
                <p className="text-xs text-secondary">LangChain</p>
              </div>
              <div className="mr-1 ml-3">
                <SiScikitlearn size={36} color="#F7931E" />
                <p className="text-xs text-secondary">Sklearn</p>
              </div>
              <div className="mr-1 ml-1">
                <Image
                src="/assets/langgraph.png"
                width={36}
                height={36}
                alt="langraph"
                color="#1C3C3C"
              />
                <p className="text-xs text-secondary">Langgraph</p>
              </div>
              
            </div>
          </motion.div>

          {/* GAME HUD / INFO TERMINAL */}
          <div className="absolute inset-x-0 bottom-4 mx-auto w-[90%] bg-black/80 backdrop-blur-md rounded-xl border border-white/10 p-4 h-[100px] shadow-lg flex items-center justify-between z-30">
            <AnimatePresence mode="wait">
              {activeRegion ? (
                <motion.div
                  key={activeRegion}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full grid justify-center items-center p-3"
                >
                  <div className="items-center">XP</div>
                  <div className="w-full md:h-2 flex">
                    
                    {
                      Array.from({ length: 6 }).map((_, idx) => (
                        <div className={cn("border border-black dark:border-white h-full w-1/5",
                          regionData[activeRegion as keyof typeof regionData].level>idx?"bg-red-600":"")}>
                          </div>
                      ))
                    }
                    <div></div>
                  </div>
                  {/* {info} */}
                  <div className="flex h-2/3">

                  <div className="flex ">
                    <h3
                      className={`font-bold mr-2 text-lg uppercase tracking-widest ${regionData[activeRegion as keyof typeof regionData].color}`}
                    >
                      {
                        regionData[activeRegion as keyof typeof regionData]
                          .title
                      }
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 max-w-[280px]">
                      {regionData[activeRegion as keyof typeof regionData].desc}
                    </p>
                  </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full text-center"
                >
                  <p className="text-sm text-gray-400 font-mono animate-pulse">
                    &gt; WAITING FOR INPUT...
                    <br />
                    <span className="text-xs text-gray-600">
                      HOVER OVER A REGION TO SCAN
                    </span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </div>
  );
}
