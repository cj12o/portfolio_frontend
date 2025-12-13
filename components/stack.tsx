// "use client";
// import React from "react";
// import Container from "./container";
// import { motion } from "framer-motion";
// import { FaReact } from "react-icons/fa";
// import {
//   SiNextdotjs,
//   SiTailwindcss,
//   SiJavascript,
//   SiPython,
//   SiDjango,
//   SiFastapi,
//   SiPostgresql,
//   SiMongodb,
//   SiDocker,
//   SiGit,
//   SiLangchain,
//   SiScikitlearn,
// } from "react-icons/si";
// import { div } from "framer-motion/client";
// const Dotted_line = ({
//   className,
//   width,
//   height,
//   children,
//   arrow_pos = "end",
// }: {
//   className?: string;
//   width: number;
//   height: number;
//   children?: React.ReactNode;
//   arrow_pos?: "start" | "end";
// }) => {
//   const isStart = arrow_pos === "start";

//   return (
//     <div className={className}>
//       <svg
//         width={width}
//         height={height}
//         viewBox={`0 0 ${width} ${height}`}
//         className="text-gray-400"
//       >
//         <defs>
//           <marker
//             id="arrow"
//             markerWidth="6"
//             markerHeight="6"
//             refX="3"
//             refY="3"
//             orient="auto"
//             markerUnits="strokeWidth"
//           >
//             <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" />
//           </marker>
//         </defs>

//         <path
//           d={
//             isStart
//               ? `M${width / 2} ${height} C ${width / 2} ${(2 * height) / 3}, ${
//                   width / 2
//                 } ${height / 3}, ${width / 2} 0`
//               : `M${width / 2} 0 C ${width / 2} ${height / 3}, ${width / 2} ${
//                   (2 * height) / 3
//                 }, ${width / 2} ${height}`
//           }
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeDasharray="3 3"
//           markerEnd="url(#arrow)"
//         />
//       </svg>
//       {children}
//     </div>
//   );
// };

// const Stack = () => {
//   return (
//     <Container>
//       <h2 className="text-sm font-medium mb-12 text-secondary uppercase tracking-wider text-center">
//         System Architecture
//       </h2>

//       {/* Diagram Container */}
//       <div className="relative w-full max-w-4xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-20 items-center md:items-start p-4 md:p-10">
//         {/* PRESENTATION TIER (Top - Spans Full Width visually or centered) */}
//         <div className="md:col-span-12 flex flex-col items-center relative z-10 w-full">
//           <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-tight bg-white px-2 z-20">
//             Frontend Technologies
//           </div>
//           <motion.div
//             className="w-full md:w-2/3 p-5 rounded-xl border border-neutral-200 bg-white shadow-sm flex flex-wrap gap-4 justify-center relative"
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             {/* Connection to App Tier */}
//             <Dotted_line
//               height={80}
//               width={40}
//               className="absolute -bottom-20 left-[25%] transform -translate-x-1/2 hidden md:block"
//               children={
//                 <h3 className="absolute top-1/2 -left-4 transform -translate-y-1/2 -translate-x-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">
//                   Request
//                 </h3>
//               }
//             />

//             <Dotted_line
//               height={80}
//               width={40}
//               className="absolute -bottom-20 left-[75%] transform -translate-x-1/2 hidden md:block"
//               arrow_pos="start"
//               children={
//                 <h3 className="absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">
//                   Response
//                 </h3>
//               }
//             />

//             <TechItem icon={<FaReact color="#61DAFB" />} name="React" />
//             <TechItem icon={<SiNextdotjs color="#000000" />} name="Next.js" />
//             <TechItem
//               icon={<SiTailwindcss color="#06B6D4" />}
//               name="Tailwind"
//             />
//             <TechItem
//               icon={<SiJavascript color="#F7DF1E" />}
//               name="JavaScript"
//             />
//           </motion.div>
//         </div>

//         {/* MIDDLE SECTION: APP TIER & AUXILIARY */}
//         {/* Application Tier (Center Leftish) */}
//         <div className="md:col-span-8 flex flex-col items-center relative z-10 w-full mt-4 md:mt-0">
//           <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-tight bg-white px-2 z-20">
//             Application Tier
//           </div>
//           <motion.div
//             className="w-full p-6 rounded-xl border border-amber-100 bg-amber-50/50 flex flex-wrap gap-4 justify-center relative min-h-[120px] items-center"
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             {/* Connection to Data Tier */}
//             <Dotted_line
//               height={80}
//               width={40}
//               className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 hidden md:block"
//             />

//             <TechItem icon={<SiPython color="#3776AB" />} name="Python" />
//             <TechItem icon={<SiDjango color="#092E20" />} name="Django" />
//             <TechItem icon={<SiFastapi color="#009688" />} name="FastAPI" />
//           </motion.div>
//         </div>
//         {/* Auxiliary Tools (Right Side) */}
//         <div className="md:col-span-4 flex flex-col items-center justify-center relative z-10 w-full h-full mt-4 md:mt-0">
//           <div className="md:absolute md:-left-4 md:top-1/2 md:-translate-y-1/2 md:w-4 md:h-0.5 md:bg-neutral-300 hidden md:block"></div>{" "}
//           {/* Horizontal connector */}
//           <motion.div
//             className="w-full h-full p-5 rounded-xl border border-dashed border-neutral-300 bg-neutral-50 flex flex-col gap-4 justify-center items-center"
//             initial={{ x: 20, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             <div className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">
//               DevOps & AI
//             </div>
//             <div className="flex flex-wrap gap-3 justify-center">
//               <TechItem
//                 icon={<SiDocker color="#2496ED" />}
//                 name="Docker"
//                 size="sm"
//               />
//               <TechItem icon={<SiGit color="#F05032" />} name="Git" size="sm" />
//               <TechItem
//                 icon={<SiLangchain color="#1C3C3C" />}
//                 name="LangChain"
//                 size="sm"
//               />
//               <TechItem
//                 icon={<SiScikitlearn color="#F7931E" />}
//                 name="Scikit"
//                 size="sm"
//               />
//             </div>
//           </motion.div>
//         </div>

//         {/* DATA TIER (Bottom) */}
//         <div className="md:col-span-12 flex flex-col items-center relative z-10 w-full mt-4 md:mt-8">
//           <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-tight bg-white px-2 z-20">
//             Databases
//           </div>
//           <motion.div
//             className="w-full md:w-1/2 p-5 rounded-xl border border-blue-100 bg-blue-50/50 flex flex-wrap gap-4 justify-center shadow-sm"
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <TechItem
//               icon={<SiPostgresql color="#4169E1" />}
//               name="PostgreSQL"
//             />
//             <TechItem icon={<SiMongodb color="#47A248" />} name="MongoDB" />
//           </motion.div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// const TechItem = ({
//   icon,
//   name,
//   size = "md",
// }: {
//   icon: React.ReactNode;
//   name: string;
//   size?: "sm" | "md";
// }) => (
//   <div
//     className={`
//         flex items-center gap-2 bg-white border border-neutral-200 rounded-lg shadow-sm
//         transition-all hover:scale-105 hover:border-neutral-300 cursor-default
//         ${size === "sm" ? "px-2 py-1" : "px-3 py-2"}
//     `}
//   >
//     <span className={`${size === "sm" ? "text-base" : "text-xl"}`}>{icon}</span>
//     <span
//       className={`font-medium text-primary ${
//         size === "sm" ? "text-xs" : "text-sm"
//       }`}
//     >
//       {name}
//     </span>
//   </div>
// );

// export default Stack;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiLangchain,
  SiScikitlearn,
} from "react-icons/si";

export default function Stack() {
  const TechItem = ({ icon, name, size = "md" }) => (
    <motion.div
      className={`flex items-center gap-2.5 bg-white border border-gray-200 rounded-lg shadow-sm transition-all ${
        size === "sm" ? "px-2.5 py-1.5" : "px-3.5 py-2"
      }`}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <span className={size === "sm" ? "text-base" : "text-xl"}>{icon}</span>
      <span
        className={`font-medium text-gray-700 ${
          size === "sm" ? "text-xs" : "text-sm"
        }`}
      >
        {name}
      </span>
    </motion.div>
  );

  return (
    <div className="w-full py-12 px-4 bg-gradient-to-b from-white to-gray-50">
      <h2 className="text-sm font-semibold mb-16 text-gray-600 uppercase tracking-widest text-center">
        System Architecture
      </h2>

      <div className="max-w-5xl mx-auto relative">
        {/* Content */}
        <div className="relative z-10 space-y-20">
          {/* LAYER 1: CLIENT */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full lg:w-4/5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Layer 1: Client Layer
                </h3>
                <div className="flex-1 h-px bg-blue-300 ml-2"></div>
              </div>

              <div className="p-8 rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 shadow-lg">
                <div className="flex flex-wrap gap-4 justify-center md:justify-start md:gap-6">
                  <TechItem icon={<FaReact color="#61DAFB" />} name="React" />
                  <TechItem
                    icon={<SiNextdotjs color="#000000" />}
                    name="Next.js"
                  />
                  <TechItem
                    icon={<SiTailwindcss color="#06B6D4" />}
                    name="Tailwind"
                  />
                  <TechItem
                    icon={<SiJavascript color="#F7DF1E" />}
                    name="JavaScript"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* LAYER 2: APPLICATION & DEVOPS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Application Server */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-1 bg-amber-500 rounded-full"></div>
                <h3 className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                  Layer 2A: Application Server
                </h3>
                <div className="flex-1 h-px bg-amber-300 ml-2"></div>
              </div>

              <div className="p-8 rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 shadow-lg">
                <div className="flex flex-wrap gap-4 justify-center md:justify-start md:gap-6">
                  <TechItem icon={<SiPython color="#3776AB" />} name="Python" />
                  <TechItem icon={<SiDjango color="#092E20" />} name="Django" />
                  <TechItem
                    icon={<SiFastapi color="#009688" />}
                    name="FastAPI"
                  />
                </div>
              </div>
            </motion.div>

            {/* DevOps & AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-1 bg-purple-500 rounded-full"></div>
                <h3 className="text-xs font-bold text-purple-600 uppercase tracking-widest">
                  Layer 2B: DevOps & AI
                </h3>
              </div>

              <div className="p-8 rounded-2xl border-2 border-dashed border-purple-200 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 shadow-lg">
                <div className="flex flex-wrap gap-3 justify-center">
                  <TechItem
                    icon={<SiDocker color="#2496ED" />}
                    name="Docker"
                    size="sm"
                  />
                  <TechItem
                    icon={<SiGit color="#F05032" />}
                    name="Git"
                    size="sm"
                  />
                  <TechItem
                    icon={<SiLangchain color="#1C3C3C" />}
                    name="LangChain"
                    size="sm"
                  />
                  <TechItem
                    icon={<SiScikitlearn color="#F7931E" />}
                    name="Scikit"
                    size="sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* LAYER 3: DATABASE */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-full lg:w-4/5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-1 bg-indigo-500 rounded-full"></div>
                <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                  Layer 3: Data Layer
                </h3>
                <div className="flex-1 h-px bg-indigo-300 ml-2"></div>
              </div>

              <div className="p-8 rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 shadow-lg">
                <div className="flex flex-wrap gap-4 justify-center md:justify-start md:gap-6">
                  <TechItem
                    icon={<SiPostgresql color="#4169E1" />}
                    name="PostgreSQL"
                  />
                  <TechItem
                    icon={<SiMongodb color="#47A248" />}
                    name="MongoDB"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
