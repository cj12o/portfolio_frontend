import React from "react";
import { projectsData } from "@/data/project-data";
import {
  SiDocker,
  SiFastapi,
  SiDjango,
  SiReact,
  SiPostgresql,
  SiTailwindcss,
  SiCelery,
  SiLangchain
} from "react-icons/si";
import Image from "next/image";
import { cn } from "@/lib/utils";

const getTechIcon = (techName: string, size: number = 16) => {
  const tech = techName.toLowerCase();
  switch (tech) {
    case "fastapi":
      return <SiFastapi size={size} className="text-[#009688]" />;
    case "django":
      return <SiDjango size={size} className="text-[#44B78B]" />;
    case "react":
      return <SiReact size={size} className="text-[#61DAFB]" />;
    case "postgresql":
      return <SiPostgresql size={size} className="text-[#336791]" />;
    case "djangorestframework":
      // Using a fallback div if image fails or path is wrong, but assuming user has the asset
      return (
        <div className="relative overflow-hidden rounded-sm">
          <Image
            height={size}
            width={50}
            src="/assets/drf.png"
            alt="DRF"
            className="object-contain"
          />
        </div>
      );
    case "tailwindcss":
      return <SiTailwindcss size={size} className="text-[#38B2AC]" />;
    case "docker":
      return <SiDocker size={size} className="text-[#2496ED]" />;
    case "celery":
      return <SiCelery size={size} className="text-[#37814A]" />;
    case "djangochannels":
    case "django channels":
      return <SiDjango size={size} className="text-[#44B78B]" />; // Reusing Django icon for channels
    case "langchain":
      return <SiLangchain size={size} className="text-[#FFA500]" />; // Fallback icon for Langchain if package not imported
    case "langgraph":
      return  <Image
      src="/assets/langgraph.png" width={size} height={size}alt="langraph" color="#1C3C3C"/>
    default:
      return null;
  }
};

const TechCategory = ({ label, items }: { label: string; items: string[] }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="flex p-2">
      <div className="flex p-1 items-center justify-center bg-neutral-200  rounded-full border-2 border-b-blue-700">
        <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold text-black 
        
        ">
          {label}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-2 px-3 py-1.5"
          >
            {getTechIcon(tech)}
            <span className="text-xs font-medium text-foreground/90 dark:text-black">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Introduction = ({ project_id }: { project_id: string }) => {
  const prj = projectsData[Number(project_id) - 1];

  if (!prj) return null;

  const url = prj.videoUrl;

  return (
    <div className="w-full h-full grid grid-cols-1 bg-white/75 pt-5 pl-3">
      {/* Content Section */}
      <div className="flex space-y-8">
        <div className="w-1/2 p-5">
          <h1 className="text-3xl font-medium bg-clip-text underline dark:text-black ">
            {prj.title}
          </h1>
          <p className="text-muted-foreground leading-relaxed text-sm lg:text-base dark:text-black ">
            {prj.description}
          </p>
        </div>
        {/* {vid} */}
        <div className="w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/20 bg-black/5 aspect-video group">
            {url ? (
              <video
                src={url}
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-secondary/20 text-muted-foreground">
                <span className="text-sm">No Preview Available</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* tech stack */}
      <div className="">
        <TechCategory label="Frontend" items={prj.techstack.frontend} />
        <TechCategory label="Backend" items={prj.techstack.backend} />
        <TechCategory label="GenAI" items={prj.techstack.GenAi} />
        <TechCategory label="Database" items={prj.techstack.database} />
        <TechCategory label="Infrastructure" items={prj.techstack.containerization}/>
        <TechCategory label="Other tools" items={prj.techstack.other} />
        
      </div>
    </div>
  );
};

export default Introduction;
