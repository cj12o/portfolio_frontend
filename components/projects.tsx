"use client";
import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/project-data";
import { Sectionheading } from "./sectionheading";
import { Heading } from "./heading";
import { SiChatbot ,SiOpenai} from "react-icons/si";
import { ArrowRight, Code2, Database} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getTechIcon as GetTechIcon } from "./getIcons";

const getTheme = (title: string) => {
  if (title.includes("Chatrooms") || title.includes("Agent"))
    return {
      icon: <SiChatbot size={24} />,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-white",
      gradient:
        "from-blue-500 via-white to-neutral-400 dark:from-blue-500 dark:to-neutral-300",
      border: "hover:border-blue-400 dark:hover:border-blue-800",
    };
  if (title.includes("Chatbot"))
    return {
      icon: <SiOpenai size={24} />,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-white",
      gradient:
        "from-emerald-500 via-white to-white/75 dark:from-emerald-500 dark:to-neutral-300",
      border: "hover:border-emerald-400 dark:hover:border-emerald-900",
    };
  return {
    icon: <Code2 size={24} />,
    color: "text-neutral-600 dark:text-neutral-400",
    bg: "bg-neutral-50 dark:bg-neutral-900/20",
    gradient:
      "from-neutral-50/50 via-white to-white dark:from-neutral-900/20 dark:via-neutral-900 dark:to-neutral-900",
    border: "hover:border-neutral-200 dark:hover:border-neutral-800",
  };
};

const getTechTags = (techstack: any): string[] => {
  if (Array.isArray(techstack)) {
    return techstack.slice(0, 4);
  }
  const tags: string[] = [];
  if (techstack?.frontend) tags.push(...techstack.frontend);
  if (techstack?.backend) tags.push(...techstack.backend);
  if (techstack?.other) tags.push(...techstack.other);
  if (techstack?.database) tags.push(...techstack.database);
  return tags.slice(0, 4);
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const tags = getTechTags(project.techstack);
  const theme = getTheme(project.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 transform hover:-translate-y-1 cursor-default overflow-hidden",
        "hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5",
        theme.border
      )}
    >
      {/* Dynamic Gradient Background */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity duration-500",
          theme.gradient
        )}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div
              className={cn(
                "h-12 w-12 rounded-2xl flex items-center justify-center shadow-sm transition-colors duration-300",
                theme.bg,
                theme.color
              )}
            >
              {theme.icon}
            </div>
          </div>

          <h3 className="text-xl  font-semibold tracking-tight text-neutral-900 dark:text-neutral-900 mb-3 ">
            {project.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tags.slice(0, 4).map((tg) => {
            const icon = GetTechIcon({ techname: tg, sz: 18 });

            return (
              <>
              {icon && <div
                key={tg}
                className="flex items-center gap-2 min-h-[28px]"
              >
              <span className="flex-shrink-0">
                {icon}
              </span>
            
                <span className="text-sm font-medium text-neutral-800 dark:text-black">
                  {tg}
                </span>
              </div>
              }
              </>
            );
          })}
          <div>...</div>
        </div>

        
        </div>

        <div className="mt-auto">
          <Link
            href={`/projects?id=${project.id}&project_name=${project.title}`}
            className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            View Details{" "}
            <ArrowRight
              size={16}
              className="ml-1 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="py-20 w-full">
      <div className="mb-12">
        <Heading>Selected Projects</Heading>
        <Sectionheading delay={0.2}>
          I’m interested in how systems behave at scale: real-time
          communication, data flows, and intelligent agents. Most of my projects
          are experiments to understand complexity by building it.
        </Sectionheading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.slice(0, 3).map((prj, idx) => (
          <ProjectCard key={prj.id} project={prj} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
