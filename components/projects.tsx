"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data";

const projects = () => {
  // Use first 2 projects for the home page or all of them
  const displayedProjects = PROJECTS.slice(0, 4);

  return (
    <div className="py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-primary">Selected Work</h2>
        <a
          href="/projects"
          className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          View all &rarr;
        </a>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {displayedProjects.map((prj, idx) => {
          return (
            <motion.div
              key={prj.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              className="group cursor-pointer"
            >
              <Image
                src={prj.image}
                height={400}
                width={400}
                alt={prj.title}
                className="w-full aspect-[4/3] rounded-2xl object-cover transition duration-500 group-hover:scale-105 group-hover:shadow-xl"
              />
              <div className="mt-4">
                <h2 className="font-semibold text-lg text-primary tracking-tight group-hover:text-amber-600 transition-colors">
                  {prj.title}
                </h2>
                <p className="text-sm text-secondary mt-1 leading-relaxed line-clamp-2">
                  {prj.description}
                </p>
                {/* Optional: Show tags if available, like in the projects page */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {prj.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default projects;
