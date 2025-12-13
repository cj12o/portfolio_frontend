"use client";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A minimal, high-performance online store built with Next.js and Stripe.",
      image: "/neymar.jpg", // Using existing asset as placeholder
      tags: ["Next.js", "TypeScript", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Clean and intuitive interface for organizing daily tasks and workflows.",
      image: "/neymar.jpg",
      tags: ["React", "Redux", "Firebase"],
      link: "#",
    },
    {
      title: "Portfolio v1",
      description:
        "My previous portfolio showcasing early web development work.",
      image: "/neymar.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather tracking with a focus on typography and readability.",
      image: "/neymar.jpg",
      tags: ["React", "API Integration"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container classname="min-h-screen md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          Projects
        </h1>
        <p className="text-secondary text-sm md:text-base pt-4 max-w-2xl leading-relaxed mb-12">
          A collection of my work, ranging from web applications to experimental
          design prototypes. Each project represents a step in my journey to
          create meaningful digital experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4 bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-primary group-hover:text-neutral-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-secondary mt-2 mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs font-medium text-neutral-500 bg-neutral-50 px-2 py-1 rounded border border-neutral-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
