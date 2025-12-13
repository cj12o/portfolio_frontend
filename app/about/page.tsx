"use client";
import Container from "@/components/container";
import { motion } from "framer-motion";

import { SKILLS, EXPERIENCE } from "@/data";

export default function About() {
  const skills = SKILLS;
  const experience = EXPERIENCE;

  return (
    <div className="min-h-screen flex items-start justify-start bg-grid-pattern bg-fixed">
      <Container classname="min-h-screen md:pt-20 md:pb-10 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
            About Me
          </h1>
          <p className="text-secondary text-sm md:text-base pt-4 max-w-2xl leading-relaxed">
            I'm a passionate software engineer who loves turning ideas into
            reality through code. With a strong foundation in full-stack
            development, I focus on creating efficient, scalable solutions that
            make a real impact.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">
            Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-primary font-medium hover:border-neutral-300 hover:shadow-sm transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="relative pl-8 border-l border-neutral-200 before:content-[''] before:absolute before:left-[-5px] before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-neutral-300 hover:before:bg-neutral-800 before:transition-colors"
              >
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  {exp.period}
                </span>
                <h3 className="text-lg font-semibold text-primary mt-1">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-neutral-600 mb-2">
                  {exp.company}
                </p>
                <p className="text-sm text-secondary leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6">
            Education
          </h2>
          <div className="pl-8 border-l border-neutral-200 relative before:content-[''] before:absolute before:left-[-5px] before:top-2 before:h-2.5 before:w-2.5 before:rounded-full before:bg-neutral-300">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              2020 - 2024
            </span>
            <h3 className="text-lg font-semibold text-primary mt-1">
              Bachelor of Technology
            </h3>
            <p className="text-sm text-neutral-600 mb-2">Computer Science</p>
            <p className="text-sm text-secondary">
              Focused on software engineering, algorithms, and web development.
            </p>
          </div>
        </motion.div>

        {/* Personal Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            Beyond Code
          </h2>
          <p className="text-sm md:text-base text-secondary leading-relaxed max-w-2xl">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, reading tech blogs, or
            enjoying a good game of football. I believe in continuous learning
            and staying curious about the ever-evolving tech landscape.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
