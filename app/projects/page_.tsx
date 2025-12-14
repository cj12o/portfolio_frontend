"use client";

import React, { useState } from "react";
import Container from "@/components/container";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderIcon,
  FileCode2,
  ChevronRight,
  ChevronDown,
  X,
  Menu,
  FileJson,
  Layout,
  PlayCircle,
  GitBranch,
} from "lucide-react";

// Project Data Type
type Project = {
  id: string;
  filename: string;
  title: string;
  description: string;
  language: "typescript" | "python" | "json";
  videoUrl?: string; // Made optional
  challenges: {
    title: string;
    description: string;
  }[];
};

// Mock Data based on user input
const projectsData: Project[] = [
  {
    id: "1",
    filename: "agentic-chat.tsx",
    title: "Agentic Chatrooms",
    language: "typescript",
    description:
      "Education is the cornerstone of personal and societal development. It empowers individuals with knowledge, critical thinking skills, and the ability to make amplified the role of education, making lifelong learning essential to adapt to rapid changes. Moreover, education supports innovation and critical analysis, which are vital for solving complex global challenges such as climate change, poverty, and public health crises.",
    videoUrl: "/demovids/21-35-51.mp4",
    challenges: [
      {
        title: "Knowledge Distribution",
        description:
          "Education is the cornerstone of personal and societal development. It empowers individuals with knowledge.",
      },
      {
        title: "Scalability",
        description:
          "Ensuring the system can handle concurrent users while maintaining real-time responsiveness.",
      },
    ],
  },
  {
    id: "2",
    filename: "analytics-engine.py",
    title: "Data Analytics Engine",
    language: "python",
    description:
      "A powerful data processing pipeline designed to handle large datasets with ease. Implements advanced algorithms for pattern recognition and predictive modeling.",
    challenges: [
      {
        title: "Data Integrity",
        description:
          "Maintaining high accuracy and consistency across distributed data shards.",
      },
    ],
  },
  {
    id: "3",
    filename: "system-config.json",
    title: "Infrastructure Config",
    language: "json",
    description:
      "Configuration management system for automated deployment and scaling of microservices architecture.",
    challenges: [],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project>(projectsData[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedFolders, setExpandedFolders] = useState<string[]>([
    "root",
    "src",
    "projects",
  ]);

  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folder)
        ? prev.filter((f) => f !== folder)
        : [...prev, folder]
    );
  };

  const getIconForFile = (filename: string) => {
    if (filename.endsWith(".tsx"))
      return <FileCode2 className="w-4 h-4 text-blue-500" />;
    if (filename.endsWith(".py"))
      return <FileCode2 className="w-4 h-4 text-yellow-500" />;
    if (filename.endsWith(".json"))
      return <FileJson className="w-4 h-4 text-yellow-300" />;
    return <FileCode2 className="w-4 h-4 text-gray-400" />;
  };

  return (
    <Container classname="h-[85vh] w-full max-w-7xl mx-auto my-8 border border-neutral-200 rounded-xl overflow-hidden shadow-2xl bg-white flex flex-col md:flex-row text-sm font-sans text-neutral-800">
      {/* Sidebar - Explorer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="h-full bg-neutral-50/50 border-r border-neutral-200 flex-shrink-0 flex flex-col"
          >
            {/* Sidebar Header */}
            <div className="h-10 px-4 flex items-center justify-between text-xs font-medium text-neutral-500 uppercase tracking-widest border-b border-neutral-200/50">
              <span>Explorer</span>
              <span className="opacity-50 hover:opacity-100 cursor-pointer">
                •••
              </span>
            </div>

            {/* File Tree */}
            <div className="flex-1 overflow-y-auto p-2">
              <div className="space-y-0.5">
                {/* Root Folder */}
                <FileTreeItem
                  name="PORTFOLIO"
                  isOpen={expandedFolders.includes("root")}
                  onClick={() => toggleFolder("root")}
                  isFolder
                >
                  {/* Src Folder */}
                  <FileTreeItem
                    name="src"
                    isOpen={expandedFolders.includes("src")}
                    onClick={() => toggleFolder("src")}
                    depth={1}
                    isFolder
                  >
                    {/* Projects Folder */}
                    <FileTreeItem
                      name="projects"
                      isOpen={expandedFolders.includes("projects")}
                      onClick={() => toggleFolder("projects")}
                      depth={2}
                      isFolder
                    >
                      {projectsData.map((project) => (
                        <FileTreeItem
                          key={project.id}
                          name={project.filename}
                          depth={3}
                          icon={getIconForFile(project.filename)}
                          isActive={activeProject.id === project.id}
                          onClick={() => setActiveProject(project)}
                        />
                      ))}
                    </FileTreeItem>

                    <FileTreeItem
                      name="components"
                      depth={2}
                      isFolder
                      isOpen={false} // Closed by default
                      onClick={() => {}}
                    />
                  </FileTreeItem>

                  <FileTreeItem
                    name="package.json"
                    depth={1}
                    icon={<FileJson className="w-4 h-4 text-red-400" />}
                  />
                  <FileTreeItem
                    name="readme.md"
                    depth={1}
                    icon={<Layout className="w-4 h-4 text-purple-400" />}
                  />
                </FileTreeItem>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Editor Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
        {/* Editor Tabs */}
        <div className="h-10 flex items-center bg-neutral-100/50 border-b border-neutral-200 overflow-x-auto no-scrollbar">
          <div
            className="px-3 py-1 flex items-center"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-4 h-4 text-neutral-500 cursor-pointer hover:text-neutral-800" />
          </div>
          {projectsData.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className={`
                flex items-center gap-2 px-3 py-2.5 min-w-[120px] max-w-[200px] text-xs border-r border-neutral-200 cursor-pointer select-none
                ${
                  activeProject.id === proj.id
                    ? "bg-white text-neutral-800 border-t-2 border-t-blue-500"
                    : "bg-transparent text-neutral-500 hover:bg-neutral-200/50"
                }
              `}
            >
              {getIconForFile(proj.filename)}
              <span className="truncate">{proj.filename}</span>
              {activeProject.id === proj.id && (
                <X className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 hover:bg-neutral-200 rounded-sm" />
              )}
            </div>
          ))}
        </div>

        {/* Breadcrumbs */}
        <div className="h-8 flex items-center px-4 text-xs text-neutral-500 border-b border-neutral-100">
          <span>src</span>
          <ChevronRight className="w-3 h-3 mx-1" />
          <span>projects</span>
          <ChevronRight className="w-3 h-3 mx-1" />
          <span className="text-neutral-800 font-medium">
            {activeProject.filename}
          </span>
        </div>

        {/* Editor Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-10">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">
                  {activeProject.language === "typescript"
                    ? "⚛️"
                    : activeProject.language === "python"
                    ? "🐍"
                    : "🔧"}
                </span>
                <h1 className="text-3xl font-bold text-neutral-900 tracking-tight">
                  {activeProject.title}
                </h1>
              </div>
              <p className="text-neutral-500 pl-14 text-lg leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            {/* Video Preview */}
            {activeProject.videoUrl && (
              <div className="mb-10 rounded-xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-900 relative group aspect-video">
                <video
                  src={activeProject.videoUrl}
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                />
                {/* Overlay for pure swag */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 text-white text-xs font-medium border border-white/10">
                  <PlayCircle className="w-3 h-3 text-green-400" />
                  <span>Live Preview</span>
                </div>
              </div>
            )}

            {/* Challenges & Solutions */}
            {activeProject.challenges.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800 uppercase tracking-widest mb-4">
                  <GitBranch className="w-4 h-4 text-purple-500" />
                  <span>Problem & Solution</span>
                </div>
                <div className="grid gap-6">
                  {activeProject.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="bg-neutral-50 rounded-xl p-6 border border-neutral-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
                    >
                      <h3 className="text-base font-semibold text-neutral-900 mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed text-sm">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mock Code Snippet */}
            <div className="mt-10 p-6 bg-neutral-900 rounded-xl border border-neutral-800 text-neutral-300 font-mono text-xs overflow-x-auto shadow-inner">
              <div className="flex gap-4 mb-4 text-neutral-500 select-none">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
              <pre>
                <code className="language-typescript">
                  {`// Implementation details for ${activeProject.filename}
export function init${activeProject.id}() {
  const engine = new Engine({
    mode: "turbo",
    context: "${activeProject.title}"
  });
  
  return engine.start();
}`}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

// Helper Component for the Sidebar Tree
const FileTreeItem = ({
  name,
  isFolder = false,
  isOpen = false,
  depth = 0,
  isActive = false,
  onClick,
  children,
  icon,
}: {
  name: string;
  isFolder?: boolean;
  isOpen?: boolean;
  depth?: number;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div>
      <div
        onClick={onClick}
        style={{ paddingLeft: `${depth * 12 + 12}px` }}
        className={`
          flex items-center gap-1.5 py-1.5 cursor-pointer select-none text-xs truncate transition-colors
          ${
            isActive
              ? "bg-blue-100 text-blue-700 font-medium"
              : "text-neutral-600 hover:bg-neutral-100"
          }
        `}
      >
        <span className="opacity-70">
          {isFolder ? (
            isOpen ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5" />
            )
          ) : (
            <span className="w-3.5" /> // Spacer
          )}
        </span>

        {icon
          ? icon
          : isFolder && (
              <FolderIcon
                className={`w-3.5 h-3.5 ${
                  isOpen ? "text-blue-400" : "text-blue-300"
                }`}
                fill="currentColor"
              />
            )}

        <span className="truncate">{name}</span>
      </div>
      {isOpen && children}
    </div>
  );
};



