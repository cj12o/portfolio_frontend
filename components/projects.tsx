"use client";
import React from "react";
import { motion } from "framer-motion";
import { project_tech_front } from "@/data/project-data";
import { Sectionheading } from "./sectionheading";
import { Heading } from "./heading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getTechIcon as GetTechIcon } from "./getIcons";
import Image from "next/image";


// Brand colors per tech
const techMeta: Record<string, { icon: string; pill: string }> = {
  react:                { icon: "text-cyan-400",                pill: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400" },
  django:               { icon: "text-green-600 dark:text-green-400", pill: "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-400" },
  djangorestframework:  { icon: "text-green-600 dark:text-green-400", pill: "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-400" },
  djangochannels:       { icon: "text-green-600 dark:text-green-400", pill: "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-400" },
  docker:               { icon: "text-blue-500",                pill: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400" },
  postgresql:           { icon: "text-blue-700 dark:text-blue-400", pill: "bg-blue-700/10 border-blue-700/20 text-blue-800 dark:text-blue-400" },
  tailwindcss:          { icon: "text-cyan-500",                pill: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400" },
  celery:               { icon: "text-green-500",               pill: "bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400" },
  langchain:            { icon: "text-purple-500",              pill: "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400" },
  langgraph:            { icon: "",                             pill: "bg-purple-600/10 border-purple-600/20 text-purple-700 dark:text-purple-400" },
  streamlit:            { icon: "text-red-500",                 pill: "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400" },
  mongodb:              { icon: "text-green-500",               pill: "bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400" },
  fastapi:              { icon: "text-teal-500",                pill: "bg-teal-500/10 border-teal-500/20 text-teal-600 dark:text-teal-400" },
  redis:                { icon: "text-red-600",                 pill: "bg-red-600/10 border-red-600/20 text-red-700 dark:text-red-500" },
  chromadb:             { icon: "text-orange-500",              pill: "bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400" },
  ollama:               { icon: "text-neutral-600 dark:text-neutral-300", pill: "bg-neutral-500/10 border-neutral-500/20 text-neutral-700 dark:text-neutral-300" },
  aws:                  { icon: "text-orange-500",              pill: "bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400" },
  lmstudio:             { icon: "text-indigo-500",              pill: "bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400" },
};

const DEFAULT_META = { icon: "text-neutral-500", pill: "bg-neutral-500/10 border-neutral-500/20 text-neutral-600 dark:text-neutral-400" };

const TechPill = ({ tech }: { tech: string }) => {
  const key = tech.toLowerCase().replace(/\s/g, "");
  const meta = techMeta[key] || DEFAULT_META;
  const icon = GetTechIcon({ techname: tech, sz: 12, className: meta.icon });

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded border text-[10px] font-medium tracking-wide whitespace-nowrap",
        meta.pill
      )}
    >
      {icon && <span className="shrink-0 flex items-center">{icon}</span>}
      {tech}
    </span>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  // Deduplicate tech (case-insensitive)
  const seen = new Set<string>();
  const uniqueTech: string[] = [];
  for (const t of project.tech as string[]) {
    const k = t.toLowerCase();
    if (!seen.has(k)) { seen.add(k); uniqueTech.push(t); }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all duration-300 hover:-translate-y-1",
        "hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 flex flex-col h-full shrink-0"
      )}
    >
      {/* IMAGE */}
      <div className="relative w-full aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800 shrink-0">
        <Image
          src={project.image}
          alt="project"
          fill={true}
          className="transition-transform duration-500 group-hover:scale-105 object-contain"
        />
        <div className="absolute inset-0 transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col gap-3 flex-1">
      <h3 className="text-xl w-fit p-1 text-neutral-900 dark:text-white" style={{ fontFamily: "var(--inter)",fontWeight:"800"}}>
  {project.title}
</h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* TECH STACK PILLS */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {uniqueTech.map((tg) => (
            <TechPill key={tg} tech={tg} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-3 border-t border-neutral-100 dark:border-neutral-800 mx-auto">
          <Link
            href={`/projects?id=${project.id}&project_name=${project.title}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
          >
            View Details
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
          </Link>

          
          {project.siteUrl && <Link
            href={project.siteUrl}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors ml-5"
          >
            Visit
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          }
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="py-20 w-full flex flex-col">
      <div className="mb-12">
        <Heading className="font-[family-name:var(--font-bungee)]">Projects</Heading>
        <Sectionheading delay={0.2}>
          I’m interested in how systems behave at scale: real-time
          communication, data flows, and intelligent agents. Most of my projects
          are experiments to understand complexity by building it.
        </Sectionheading>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {project_tech_front.map((prj, idx) => (
          <ProjectCard key={prj.id} project={prj} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
